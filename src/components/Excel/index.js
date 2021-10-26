import React, { Component } from 'react';
import cx from 'classnames';
import keyboardShortcut from '../keyboardShortcut';
import Scroll from './components/Scroll';
import {
  isFirefox,
  fillRect,
  fillText,
  strokeRect,
  colWidth,
  rowHeight,
  drawLine,
  handleFocusCells,
  tableToArray,
  base26,
} from './tools';
import './index.scss';

let timer = null;
@keyboardShortcut()
export default class Excel extends Component {
  mouseDownSign = false;
  ratio = window.devicePixelRatio || 1;
  defaultConfig = {
    cellWidth: 80,
    cellHeight: 25,
    colHeight: 25,
    rowWidth: 25,
  };
  standard = {};
  constructor(props) {
    super(props);
    this.colWidth = colWidth.bind(this);
    this.rowHeight = rowHeight.bind(this);
    this.position = this.position.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.state = {
      // 单元格默认宽度
      cellWidth: props.cellWidth || this.defaultConfig.cellWidth,
      // 单元格默认高度
      cellHeight: props.cellHeight || this.defaultConfig.cellHeight,
      // 列头高度
      colHeight: this.defaultConfig.colHeight,
      // 行头宽度
      rowWidth: this.defaultConfig.rowWidth,
      // 列宽
      widths: {
        A: 200,
      },
      // 行高
      heights: {
        1: 80,
        2: 50,
        5: 40,
      },
      // 单元格输入框样式
      cellInput: { style: {}, value: '', position: null },
      styles: {},
      // 纵向滚动距离
      scrollTop: 0,
      // 横向滚动距离
      scrollLeft: 0,
      // 选中区域
      focusCells: {
        start: null,
        end: null,
      },
      dataSource: props.dataSource,
    };
  }
  onkeydown() {
    return {
      contextmenu: (e) => {
        e.preventDefault();
        console.log('右键菜单');
      },
      copy: () => {
        const { focusCells } = this.state;
        const { start, end } = handleFocusCells(
          focusCells.start,
          focusCells.end
        );
        console.log(start, end);
      },
      paste: (e) => {
        if (e.clipboardData || e.originalEvent) {
          e.preventDefault();
          const clipboardData = e.clipboardData || window.clipboardData;
          // 检查是否复制了excel内容
          const html = clipboardData.getData('text/html');
          let result = tableToArray(html);
          // 复制的字符串内容
          if (result.length === 0) {
            result = [
              [{ format: 'string', value: clipboardData.getData('text') }],
            ];
          }
          const { focusCells } = this.state;
          const { start } = handleFocusCells(focusCells.start, focusCells.end);
          if (start && start.x > 0 && start.y > 0) {
            const cell = `${base26.column(start.x)}${start.y}`;
            this.excelInsetContent(cell, result);
          }
        }
      },
    };
  }
  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ excel 操作方法 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  /**
   * 覆盖内容
   * @param {*} startCell 开始单元格
   * @param {*} content 内容 [[{}, {}], [{}, {}], [{}, {}]]
   */
  excelInsetContent(startCell, content) {
    if (startCell) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, col, row] = startCell.match(/([A-Z]+)([0-9]+)/);
      const _col = base26.index(col) - 1;
      const _row = Number(row) - 1;
      const dataSource = {...this.state.dataSource};
      content.forEach((rowContent, rowIndex) => {
        if (rowContent.length === 0) {
          // 空行使用空数组占位
          dataSource[rowIndex + _row] = [];
          return;
        }
        rowContent.forEach((colCotent, colIndex) => {
          if (!dataSource[rowIndex + _row]) dataSource[rowIndex + _row] = [];
          dataSource[rowIndex + _row][colIndex + _col] = colCotent;
        });
      });
      this.onSetDataSourceAndPaintInit(dataSource);
    }
  }
  /**
   * 获取excel数据
   */
  getExcelData() {
    const dataSource = {...this.state.dataSource};
    for (let i = 0, len = dataSource.length; i < len; i++) {
      dataSource[i] = dataSource[i] || [];
      for (let j = 0, l = dataSource[i].length; j < l; j++) {
        dataSource[i][j] = dataSource[i][j] || null;
      }
    }
    return dataSource;
  }
  /**
   * 聚焦单元格
   * @param {*} cell
   */
  focusCell(cell) {
    
  }
  // 获取单元格数据 A1
  getCellValue(cell) {
    const [_, col, row] = cell.match(/([A-Z]+)([0-9]+)/);
    return this.state.dataSource?.[row]?.[col]
  }
  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ excel 操作方法 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  // row 行 col 列
  componentDidMount() {
    window.excel = this;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.paintInit(entry.target);
      }
    });
    const dom = document.querySelector('#canvas_wrap');
    resizeObserver.observe(dom);
    dom?.addEventListener(
      isFirefox ? 'DOMMouseScroll' : 'mousewheel',
      this.handleWheel
    );
  }
  // 修改 dataSource,并重回canvas
  onSetDataSourceAndPaintInit(dataSource, other = {}) {
    this.setState({ dataSource, ...other }, () => {
      this.paintInit();
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.onSetDataSourceAndPaintInit(nextProps.dataSource);
  }
  handleWheel(e) {
    e.preventDefault();
    const { deltaX, deltaY } = e;
    const { scrollTop, scrollLeft } = this.state;
    let _deltaX = 0;
    let _deltaY = 0;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      _deltaX = deltaX;
    } else {
      _deltaY = deltaY;
    }
    // 滚动到起点 就不必要刷新了
    // if(
    //   scrollLeft <= 0 && _deltaX <= 0 &&
    //   scrollTop <= 0 && _deltaY <= 0
    //   )return;
    const _scrollTop = scrollTop + _deltaY;
    const _scrollLeft = scrollLeft + _deltaX;
    this.setState(
      {
        scrollTop: _scrollTop <= 0 ? 0 : _scrollTop,
        scrollLeft: _scrollLeft <= 0 ? 0 : _scrollLeft,
      },
      () => {
        this.paintInit();
      }
    );
  }
  paintInit(dom) {
    const _dom = dom || document.querySelector('#canvas_wrap');
    const { endRowIndex } = this.standard;
    // 序号的大小影响行头的宽度
    endRowIndex &&
      this.setState({
        rowWidth:
          this.defaultConfig.rowWidth +
          (endRowIndex.toString().length - 1) * 10,
      });
    if (_dom) {
      const { width, height } = _dom.getBoundingClientRect();
      this.canvasInit(width, height);
    }
  }
  canvasInit(w, h) {
    const colCanvas = document.getElementById('col-canvas');
    const rowCanvas = document.getElementById('row-canvas');
    const contentCanvas = document.getElementById('content-canvas');
    if (!colCanvas || !rowCanvas || !contentCanvas) {
      return;
    }
    const { colHeight, rowWidth } = this.state;
    colCanvas.width = w * this.ratio; // 实际渲染像素
    colCanvas.height = colHeight * this.ratio; // 实际渲染像素
    colCanvas.style.width = `${w}px`; // 控制显示大小
    colCanvas.style.height = `${colHeight}px`; // 控制显示大小
    const colContext = colCanvas.getContext('2d');
    colContext.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);

    rowCanvas.width = rowWidth * this.ratio; // 实际渲染像素
    rowCanvas.height = h * this.ratio; // 实际渲染像素
    rowCanvas.style.width = `${rowWidth}px`; // 控制显示大小
    rowCanvas.style.height = `${h}px`; // 控制显示大小
    const rowContext = rowCanvas.getContext('2d');
    rowContext.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);

    contentCanvas.width = w * this.ratio;
    contentCanvas.height = h * this.ratio;
    contentCanvas.style.width = `${w}px`;
    contentCanvas.style.height = `${h}px`;
    const contentContext = contentCanvas.getContext('2d');
    contentContext.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);

    const { scrollLeft, scrollTop } = this.state;
    // 寻找开始位置处是第几列
    // 宽度累加 与滚动条的偏移量对比 寻找从第几列开始绘制
    let startColIndex = 1;
    const startCol = base26.column(startColIndex);
    let offsetX = this.colWidth(startCol);
    while (offsetX < scrollLeft) {
      startColIndex++;
      const _startCol = base26.column(startColIndex);
      offsetX += this.colWidth(_startCol);
    }
    // 寻找结束位置处是第几列
    // 宽度累加 寻找可视区域需要绘制到多少列 默认最初的宽度是第一列显示出来的宽度
    let col_acc = offsetX - scrollLeft;
    let endColIndex = startColIndex;
    while (col_acc < w) {
      endColIndex++;
      const endCol = base26.column(endColIndex);
      col_acc += this.colWidth(endCol);
    }
    // 可视区域第一列绘制的起始位置 列偏移量
    const _startCol = base26.column(startColIndex);
    const cellOffsetX = offsetX - scrollLeft - this.colWidth(_startCol);
    // 寻找开始位置处是第几行
    let startRowIndex = 1;
    let offsetY = this.rowHeight(startRowIndex);
    while (offsetY < scrollTop) {
      startRowIndex++;
      offsetY += this.rowHeight(startRowIndex);
    }
    // 寻找结束位置处是第几行
    // 高度累加 寻找可视区域需要绘制到多少行 默认最初的宽度是第一行显示出来的高度
    let row_acc = offsetY - scrollTop;
    let endRowIndex = startRowIndex;
    while (row_acc < h) {
      endRowIndex++;
      row_acc += this.rowHeight(endRowIndex);
    }
    // 可视区域第一行绘制的起始位置 行偏移量
    const cellOffsetY = offsetY - scrollTop - this.rowHeight(startRowIndex);
    this.standard = {
      cellOffsetX,
      startRowIndex,
      endRowIndex,
      cellOffsetY,
      startColIndex,
      endColIndex,
      width: w,
      height: h,
    };
    // 列头 从x位置开始绘制 startRowIndex列 到 startRowIndex + 20列
    this.paintCol(colContext, cellOffsetX, startColIndex, endColIndex, w);
    // 行头
    this.paintRow(rowContext, cellOffsetY, startRowIndex, endRowIndex, h);
    // 单元格
    this.paintCells({
      ctx: contentContext,
      cellOffsetX,
      cellOffsetY,
      startRowIndex,
      endRowIndex,
      startColIndex,
      endColIndex,
      width: w,
      height: h,
    });
    // 左上角
    this.paintTriangle(contentContext);
  }
  // 左上角
  paintTriangle(ctx) {
    const { rowWidth, colHeight } = this.state;
    // 矩形填充
    fillRect({
      context: ctx,
      fillStyle: '#fff',
      x: 0,
      y: 0,
      width: rowWidth + 1,
      height: colHeight + 1,
    });
    // 矩形边框
    strokeRect({
      context: ctx,
      strokeStyle: '#cecece',
      x: 0.5,
      y: 0,
      width: rowWidth - 0.5,
      height: colHeight - 0.5,
    });

    ctx.fillStyle = '#dfdfdf';
    ctx.moveTo(rowWidth - 3, 0.5);
    ctx.lineTo(rowWidth - 3, colHeight - 3);
    ctx.lineTo(0.5, colHeight - 3);
    ctx.lineTo(rowWidth - 3, 0.5);
    ctx.fill();
  }
  // 单元格区域
  paintCells = ({
    ctx,
    cellOffsetX,
    cellOffsetY,
    startRowIndex,
    endRowIndex,
    startColIndex,
    endColIndex,
    width,
    height,
  }) => {
    const { rowWidth, colHeight, dataSource, focusCells } = this.state;
    const { start, end } = handleFocusCells(focusCells.start, focusCells.end);
    let startTop = cellOffsetY + colHeight;
    const focusX = [start.x, end.x];
    const focusY = [start.y, end.y];
    const drawLineArray = [];
    for (let i = startRowIndex; i <= endRowIndex; i++) {
      // 当前单元格高度
      const h = this.rowHeight(i);
      // 单元格开始位置
      const startPointY = startTop - 0.5;
      // 下一个单元格开始位置
      startTop += h;
      let startLeft = cellOffsetX + rowWidth;
      for (let j = startColIndex; j <= endColIndex; j++) {
        // 单元格文本内容
        const col = base26.column(j);
        const text = dataSource?.[i]?.[col]?.value || '';
        const w = this.colWidth(col);
        // 单元格开始位置
        const startPointX = startLeft - 0.5;
        // 下一个单元格开始位置
        startLeft += w;
        const startCell = focusCells.start || { x: -1, y: -1 };
        let fillStyle = null;
        let strokeStyle = '#d4d4d4';
        if (j === startCell.x && i === startCell.y) {
          fillStyle = '#fff';
          strokeStyle = '#a5a5a5';
        } else if (
          j >= focusX[0] &&
          j <= focusX[1] &&
          i >= focusY[0] &&
          i <= focusY[1]
        ) {
          fillStyle = '#c6c6c6';
          strokeStyle = '#a5a5a5';
        } else {
          fillStyle = '#fff';
        }
        // 矩形填充
        fillRect({
          context: ctx,
          fillStyle,
          x: startPointX,
          y: startPointY,
          width: w,
          height: h,
        });
        // 矩形边框
        strokeRect({
          context: ctx,
          strokeStyle,
          x: startPointX,
          y: startPointY,
          width: w,
          height: h,
        });
        // 文本
        fillText({
          context: ctx,
          globalCompositeOperation: 'source-over',
          font: '14px PingFang SC',
          fillStyle: '#333',
          text,
          x: startPointX + 5,
          y: startPointY + h / 2,
        });
        // 左边线
        if (j === start.x && i >= start.y && i <= end.y) {
          drawLineArray.push({
            x1: startPointX + 0.5,
            y1: startPointY + 0.5,
            x2: startPointX + 0.5,
            y2: startPointY + 0.5 + h,
          });
        }
        // 上边线
        if (i === start.y && j >= start.x && j <= end.x) {
          drawLineArray.push({
            x1: startPointX + 0.5,
            y1: startPointY + 0.5,
            x2: startPointX + 0.5 + w,
            y2: startPointY + 0.5,
          });
        }
        // 右边线
        if (j === end.x && i >= start.y && i <= end.y) {
          drawLineArray.push({
            x1: startPointX + 0.5 + w,
            y1: startPointY + 0.5,
            x2: startPointX + 0.5 + w,
            y2: startPointY + 0.5 + h,
          });
        }
        // 下边线
        if (i === end.y && j >= start.x && j <= end.x) {
          drawLineArray.push({
            x1: startPointX + 0.5,
            y1: startPointY + 0.5 + h,
            x2: startPointX + 0.5 + w,
            y2: startPointY + 0.5 + h,
          });
        }
      }
    }
    // 单元格选中
    drawLineArray.forEach((item) => {
      drawLine({
        ...item,
        context: ctx,
        lineWidth: 2,
        strokeStyle: '#217346',
      });
    });
    // 单元格canvas清除表头的区域
    ctx.clearRect(0, 0, rowWidth, height);
    ctx.clearRect(0, 0, width, colHeight);
  };
  /**
   * 绘制可视区域的列头
   * @param {*} ctx
   * @param {*} x 首个单元格的起始位置
   * @param {*} start 起始单元格的索引
   * @param {*} end 结束单元格的索引
   */
  paintCol(ctx, x, start, end, w) {
    const { rowWidth, colHeight, focusCells } = this.state;
    // 先擦除后绘制
    ctx.clearRect(0, 0, w, colHeight - 1);
    let startLeft = x + rowWidth;
    let focusX = null;
    if (focusCells.start && focusCells.end) {
      focusX = [focusCells.start.x, focusCells.end.x].bubbleSort();
    }
    const drawLineArray = [];
    for (let index = start; index <= end; index++) {
      // 当前单元格宽度
      const col = base26.column(index);
      const width = this.colWidth(col);
      // 单元格开始位置
      const startPointX = startLeft - 0.5;
      // 下一个单元格开始位置
      startLeft += width;
      ctx.beginPath();
      let fillStyle = null;
      let color = null;
      let strokeStyle = null;
      if (focusX && index >= focusX[0] && index <= focusX[1]) {
        drawLineArray.push({
          x1: startPointX + 0.5,
          y1: colHeight,
          x2: startPointX + 0.5 + width,
          y2: colHeight,
        });
      }
      // 单元格选择的列标志线
      if (
        index === focusCells?.end?.x &&
        focusCells?.end?.y === Number.MAX_VALUE
      ) {
        // 列全选样式
        fillStyle = '#d8eee2';
        color = '#466e63';
        strokeStyle = '#9e9e9e';
      } else if (focusX && index >= focusX[0] && index <= focusX[1]) {
        // 列选中样式
        fillStyle = '#d2d2d2';
        color = '#2a694a';
        strokeStyle = '#a6a6a6';
      } else {
        // 默认样式
        fillStyle = '#e6e6e6';
        color = '#333';
        strokeStyle = '#9e9e9e';
      }
      // 矩形填充
      fillRect({
        context: ctx,
        fillStyle,
        x: startPointX,
        y: 0,
        width,
        height: colHeight,
      });
      // 矩形边框
      strokeRect({
        context: ctx,
        strokeStyle,
        x: startPointX,
        y: 0,
        width,
        height: colHeight - 0.5,
      });
      // 文本
      fillText({
        context: ctx,
        font: '16px PingFang SC',
        fillStyle: color,
        textAlign: 'left',
        text: base26.column(index),
        x: startPointX + 5,
        y: colHeight / 2,
      });
      ctx.stroke();
      ctx.closePath();
    }
    // 清除左上角
    ctx.clearRect(0, 0, rowWidth, colHeight);
    // 单元格选择的行标志线
    drawLineArray.forEach((item) => {
      drawLine({
        ...item,
        context: ctx,
        lineWidth: 2,
        strokeStyle: '#227346',
      });
    });
  }

  /**
   * 绘制可视区域的行头
   * @param {*} ctx
   * @param {*} y 首个单元格的起始位置
   * @param {*} start 起始单元格的索引
   * @param {*} end 结束单元格的索引
   * @param {*} h
   */
  paintRow(ctx, y, start, end, h) {
    const { rowWidth, colHeight, focusCells } = this.state;
    // 先擦除后绘制
    ctx.clearRect(0, 0, rowWidth - 1, h);
    let startTop = y + colHeight;
    let focusY = null;
    if (focusCells.start && focusCells.end) {
      focusY = [focusCells.start.y, focusCells.end.y].bubbleSort();
    }
    const drawLineArray = [];
    for (let index = start; index <= end; index++) {
      // 当前单元格宽度
      const height = this.rowHeight(index);
      // 单元格开始位置
      const startPointY = startTop - 0.5;
      // console.log(startPointY)
      // 下一个单元格开始位置
      startTop += height;
      ctx.beginPath();
      let fillStyle = null;
      let color = null;
      let strokeStyle = null;
      // 单元格选择的行标志线
      if (focusY && index >= focusY[0] && index <= focusY[1]) {
        fillStyle = '#d2d2d2';
        color = '#2a694a';
        strokeStyle = '#a6a6a6';
        drawLineArray.push({
          x1: rowWidth,
          y1: startPointY,
          x2: rowWidth,
          y2: startPointY + height,
        });
      } else {
        fillStyle = '#e6e6e6';
        color = '#333';
        strokeStyle = '#9e9e9e';
      }
      // 矩形填充
      fillRect({
        context: ctx,
        fillStyle,
        x: 0,
        y: startPointY,
        width: rowWidth,
        height,
      });
      // 矩形边框
      strokeRect({
        context: ctx,
        strokeStyle,
        x: 0,
        y: startPointY,
        width: rowWidth,
        height,
      });
      // 文本
      fillText({
        context: ctx,
        font: '16px PingFang SC',
        fillStyle: color,
        textAlign: 'center',
        text: index,
        x: rowWidth / 2,
        y: startPointY + height / 2,
      });
      ctx.stroke();
      ctx.closePath();
    }
    // 清除左上角
    ctx.clearRect(0, 0, rowWidth, colHeight);
    // 单元格选择的行标志线
    drawLineArray.forEach((item) => {
      drawLine({
        ...item,
        context: ctx,
        lineWidth: 2,
        strokeStyle: '#227346',
      });
    });
  }

  setCursor = (type = 'pointer') => {
    this.setState((prevState) => ({
      style: {
        ...prevState.style,
        cursor: type,
      },
    }));
  };

  // 双击编辑单元格
  handleDoubleClick(e) {
    const { width, height, cellLeft, cellTop, cell, row, col } = this.position(e);
    const cellContent = this.getCellValue(cell);

    this.setState({
      cellInput: {
        style: {
          width: width - 2,
          height: height - 2,
          left: cellLeft + 1,
          top: cellTop + 1
        },
        value: cellContent?.value || '',
        position: {row, col}
      }
    }, () => {
      document.getElementsByClassName('excel-focus-input')[0].focus();
    })
  }

  handleMouseDown(e) {
    // 忽略 鼠标右键触发的点击事件
    if (e.button === 2) return;
    this.mouseDownSign = true;
    const { x, y } = this.position(e);

    let start = null;
    let end = null;

    if (x <= 0 && y > 0) {
      start = { x: 1, y };
      end = { x: Number.MAX_VALUE, y };
    } else if (x > 0 && y <= 0) {
      start = { x, y: 1 };
      end = { x, y: Number.MAX_VALUE };
    } else if (x === 0 && y === 0) {
      start = { x: 1, y: 1 };
      end = { x: Number.MAX_VALUE, y: Number.MAX_VALUE };
    } else {
      start = { x, y };
      end = { x, y };
    }
    this.setState(
      {
        focusCells: handleFocusCells(start, end),
      },
      () => {
        this.paintInit();
      }
    );
  }
  handleMouseLeave() {
    this.mouseDownSign = false;
  }
  handleMouseUp() {
    this.mouseDownSign = false;
  }
  handleMouseMove(e) {
    const { clientX, clientY, currentTarget } = e;
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      const position = this.position({ clientX, clientY, currentTarget });
      this.setState({ mouseMovePosition: position }, () => {
        this.handleMouseEvent(e, position);
      });
      if (!this.mouseDownSign) return;
      const { x, y } = position;
      const focusCells = { ...this.state.focusCells };
      // 记录起始与结束单元格
      focusCells[focusCells.start ? 'end' : 'start'] = { x, y };

      // const { startColIndex, endColIndex, startRowIndex, endRowIndex } =
      //   this.standard;
      // let { scrollLeft, scrollTop } = this.state;
      // if (focusCells.end.x >= endColIndex - 2) {
      //   // 向左拖拉选中
      //   const col = base26.column(startColIndex + 1);
      //   scrollLeft += this.colWidth(col);
      // } else if (focusCells.end.x <= startColIndex + 2) {
      //   // 向右拖拉选中
      //   const col = base26.column(startColIndex);
      //   const _scrollLeft = scrollLeft - this.colWidth(col);
      //   scrollLeft = _scrollLeft >= 0 ? _scrollLeft : 0;
      // }
      // if (focusCells.end.y > endRowIndex - 4) {
      //   // 向下拖拉选中
      //   scrollTop += 100;
      // } else if (focusCells.end.y <= startRowIndex + 4) {
      //   // 向上拖拉选中
      //   const _scrollTop = scrollTop - 100;
      //   scrollTop = _scrollTop >= 0 ? _scrollTop : 0;
      // }

      this.setState({ 
        focusCells, 
        // scrollLeft, 
        // scrollTop 
      }, () => {
        this.paintInit();
      });
    }, 90);
  }

  // 全局鼠标样式处理
  handleMouseEvent(e, position) {
    const { x, y, offsetLeft } = position;
    const { cellOffsetX, endColIndex, startColIndex } = this.standard;
    // console.log(this.standard);
    let cursor = 'cell';
    if (x > 0 && y === 0) {
      cursor = 's-resize';
    } else if (x === 0 && y > 0) {
      cursor = 'e-resize';
    }
    this.setState((prevState) => ({
      styles: {
        ...prevState.styles,
        cursor,
      },
    }));
  }

  onCellInputBlur = (e) => {
    const { cellInput, dataSource} = this.state;
    const _dataSource = {...dataSource};
    const {row, col} = cellInput.position || {};
    if (row && col) {
      _dataSource[row] = _dataSource[row] || {};
      _dataSource[row][col] = {format: 'text', value: e.target.value};
    }
    this.setState({
      dataSource: _dataSource,
      cellInput: {
        style: {
          ...cellInput.style,
          left: -999,
          top: -999
        },
        value: '',
        position: null,
      }
    }, () => this.paintInit());
  }

  position(e) {
    const { clientX, clientY, currentTarget } = e;
    const offsetLeft =
      clientX -
      (currentTarget.getBoundingClientRect().left -
        document.documentElement.clientLeft);
    const offsetTop =
      clientY -
      (currentTarget.getBoundingClientRect().top -
        document.documentElement.clientTop);
    const { colHeight, rowWidth } = this.state;

    let x = null;
    let y = null;

    let cellTop = 0;
    let cellLeft = 0;
    
    const { cellOffsetX, cellOffsetY, startRowIndex, startColIndex } =
      this.standard;
    if (offsetTop <= colHeight) {
      y = 0;
      cellTop = 0;
    } else {
      y = startRowIndex;
      let col_acc = colHeight + cellOffsetY + this.rowHeight(y);
      cellTop = col_acc;
      while (col_acc <= offsetTop) {
        y++;
        col_acc += this.rowHeight(y);
        cellTop = col_acc;
      }
    }
    if (offsetLeft <= rowWidth) {
      x = 0;
      cellLeft = 0;
    } else {
      x = startColIndex;
      const col = base26.column(x);
      let row_acc = rowWidth + cellOffsetX + this.colWidth(col);
      cellLeft = row_acc;
      while (row_acc <= offsetLeft) {
        x++;
        const _col = base26.column(x);
        row_acc += this.colWidth(_col);
        cellLeft = row_acc;
      }
    }

    const col = base26.column(x);
    const cell = `${base26.column(x)}${y}`;
    const width = this.colWidth(col);
    const height = this.rowHeight(y);
    cellTop -= height;
    cellLeft -= width;
    return {
      x,
      y,
      row: y,
      col,
      cell,
      offsetLeft,
      offsetTop,
      width,
      height,
      cellTop,
      cellLeft,
    };
  }

  render() {
    const { styles, cellInput } = this.state;
    const { style, className } = this.props;
    const _style = { ...style, ...styles };
    const _className = cx('canvas-wrap', className);

    return (
      <div
        className="excel-wrap-3l4uGQO"
        onDoubleClick={(e) => this.handleDoubleClick(e)}
        onMouseDown={(e) => this.handleMouseDown(e)}
        onMouseUp={(e) => this.handleMouseUp(e)}
        onMouseMove={(e) => this.handleMouseMove(e)}
        onMouseLeave={(e) => this.handleMouseLeave(e)}
      >
        <div className="excel-canvas-wrap">
          <div
            id="canvas_wrap"
            style={_style}
            className={_className}
          >
            <canvas id="col-canvas" />
            <canvas id="row-canvas" />
            <canvas id="content-canvas" />
          </div>
          <Scroll className="scroll-y-wrap" direction="hoz" />
        </div>
        <Scroll className="scroll-x-wrap" direction="ver" />
        {
          cellInput.position && 
          <input className="excel-focus-input" style={cellInput.style} defaultValue={cellInput.value} onBlur={this.onCellInputBlur} />
        }
      </div>
    );
  }
}
