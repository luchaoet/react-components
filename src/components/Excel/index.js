import React, { Component } from 'react';
import cx from 'classnames';
import { 
  colTitle, 
  isFirefox, 
  fillRect, 
  fillText, 
  strokeRect, 
  colWidth, 
  rowHeight,
  drawLine,
  handleFocusCells,
} from './tools';
import keyboardShortcut from '../keyboardShortcut'
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
      cellWidth: props.cellWidth || this.defaultConfig.cellWidth,
      cellHeight: props.cellHeight || this.defaultConfig.cellHeight,
      // 列头高度
      colHeight: this.defaultConfig.colHeight,
      // 行头宽度
      rowWidth: this.defaultConfig.rowWidth,
      widths: {
        0: 200,
        1: 100,
        3: 90
      },
      heights: {},
      styles: {},
      // 纵向滚动距离
      scrollTop: 0,
      // 横向滚动距离
      scrollLeft: 0, 
      focusCellStyle: {
        width: 80,
        height: 25,
        top: 30,
        left: 100,
      },
      focusCells: {
        start: null,
        end: null
      },
      canvasStyle: {},
      dataSource: props.dataSource,
      pageX: -100, 
      pageY: 100,
    };
  }

  onkeydown() {
    return {
      contextmenu: (e) => {
        e.preventDefault();
        console.log('右键菜单')
      }
    }
  }

  // row 行 col 列
  componentDidMount() {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.paintInit(entry.target);
      }
    });
    const dom = document.querySelector('#canvas_wrap');
    resizeObserver.observe(dom);

    dom?.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', this.handleWheel);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: nextProps.dataSource
    }, () => {
      this.paintInit();
    })
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
      },
    );
  }

  paintInit(dom) {
    const _dom = dom || document.querySelector('#canvas_wrap');
    const { endRowIndex } = this.standard;
    // 序号的大小影响行头的宽度
    endRowIndex && this.setState({rowWidth: this.defaultConfig.rowWidth + (endRowIndex.toString().length - 1) * 10})
    if (_dom) {
      const { width, height } = _dom.getBoundingClientRect();
      this.canvasInit(width, height);
    }
  }

  canvasInit(w, h) {
    const rowColCanvas = document.getElementById('row-col-canvas');
    const contentCanvas = document.getElementById('content-canvas');
    if (!rowColCanvas || !contentCanvas) {
      return;
    }

    rowColCanvas.width = w * this.ratio; // 实际渲染像素
    rowColCanvas.height = h * this.ratio; // 实际渲染像素
    rowColCanvas.style.width = `${w}px`; // 控制显示大小
    rowColCanvas.style.height = `${h}px`; // 控制显示大小
    const rcctx = rowColCanvas.getContext('2d');
    rcctx.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);

    contentCanvas.width = w * this.ratio;
    contentCanvas.height = h * this.ratio;
    contentCanvas.style.width = `${w}px`;
    contentCanvas.style.height = `${h}px`;
    const cctx = contentCanvas.getContext('2d');
    cctx.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);

    const { scrollLeft, scrollTop } = this.state;

    // 寻找开始位置处是第几列
    // 宽度累加 与滚动条的偏移量对比 寻找从第几列开始绘制
    let startColIndex = 0;
    let offsetX = this.colWidth(startColIndex);
    while (offsetX < scrollLeft) {
      startColIndex++;
      offsetX += this.colWidth(startColIndex);
    }
    // 寻找结束位置处是第几列
    // 宽度累加 寻找可视区域需要绘制到多少列 默认最初的宽度是第一列显示出来的宽度
    let col_acc = offsetX - scrollLeft;
    let endColIndex = startColIndex;
    while (col_acc < w) {
      endColIndex++;
      col_acc += this.colWidth(endColIndex);
    }
    // 可视区域第一列绘制的起始位置 列偏移量
    const cellOffsetX = offsetX - scrollLeft - this.colWidth(startColIndex);

    // 寻找开始位置处是第几行
    let startRowIndex = 0;
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
    const cellOffsetY = offsetY - scrollTop - this.rowHeight(endRowIndex);

    this.standard = {
      cellOffsetX, 
      startRowIndex, 
      endRowIndex,
      cellOffsetY, 
      startColIndex, 
      endColIndex,
      width: w, 
      height: h
    }

    // 列头 从x位置开始绘制 startRowIndex列 到 startRowIndex + 20列
    this.paintCol(rcctx, cellOffsetX, startColIndex, endColIndex, w);
    // 行头
    this.paintRow(rcctx, cellOffsetY, startRowIndex, endRowIndex, h);
    // 单元格
    this.paintCells({
      ctx: cctx, 
      cellOffsetX, 
      cellOffsetY, 
      startRowIndex, 
      endRowIndex, 
      startColIndex, 
      endColIndex, 
      width: w, 
      height: h
    });
  }

  paintCells = ({ctx, cellOffsetX, cellOffsetY, startRowIndex, endRowIndex, startColIndex, endColIndex, width, height}) => {
    const { rowWidth, colHeight, dataSource, focusCells } = this.state;
    let startTop = cellOffsetY + colHeight;

    const { start, end } = focusCells;
    const _start = start || {x: -1, y: -1};
    const _end = end || {x: -1, y: -1};
    
    for (let i = startRowIndex; i <= endRowIndex; i++) {
      // 当前单元格宽度
      const h = this.rowHeight(i);
      // 单元格开始位置
      const startPointY = startTop - 0.5;
      // 下一个单元格开始位置
      startTop += h;
      
      let startLeft = cellOffsetX + rowWidth;
      for (let j = startColIndex; j <= endColIndex; j++) {
        const text = dataSource?.[i]?.[j] || '';
        const w = this.colWidth(j)
        // 单元格开始位置
        const startPointX = startLeft - 0.5;
        // 下一个单元格开始位置
        startLeft += w;

        // 矩形填充
        fillRect({ 
          context: ctx, 
          fillStyle: j === _start.x && i === _start.y ? '#fff' : '#faf8f8',
          x: startPointX, 
          y: startPointY, 
          width: w, 
          height: h 
        });
        // 矩形边框
        strokeRect({ context: ctx, strokeStyle: '#cecece', x: startPointX, y: startPointY, width: w, height: h });
        
        // 文本
        fillText({
          context: ctx,
          globalCompositeOperation: 'source-over',
          font: '14px PingFang SC',
          fillStyle: '#333',
          text,
          x: startPointX + 5,
          y: startPointY + h / 2
        });
      }
    }

    startTop = cellOffsetY + colHeight;

    for (let i = startRowIndex; i <= endRowIndex; i++) {
      // 当前单元格宽度
      const h = this.rowHeight(i);
      // 单元格开始位置
      const startPointY = startTop - 0.5;
      // 下一个单元格开始位置
      startTop += h;
      
      let startLeft = cellOffsetX + rowWidth;
      for (let j = startColIndex; j <= endColIndex; j++) {
        const w = this.colWidth(j)
        // 单元格开始位置
        const startPointX = startLeft - 0.5;
        // 下一个单元格开始位置
        startLeft += w;

        // 左边线
        if (j === _start.x && i >= _start.y && i <= _end.y) {
          drawLine({
            context: ctx, 
            x1: startPointX, 
            y1: startPointY, 
            x2: startPointX, 
            y2: startPointY + h, 
            lineWidth: 2, 
            strokeStyle: '#227346'
          })
        }
        // 上边线
        if (i === _start.y && j >= _start.x && j <= _end.x) {
          drawLine({
            context: ctx, 
            x1: startPointX, 
            y1: startPointY, 
            x2: startPointX + w, 
            y2: startPointY, 
            lineWidth: 2, 
            strokeStyle: '#227346'
          })
        }
        // 右边线
        if (j === _end.x && i >= _start.y && i <= _end.y) {
          drawLine({
            context: ctx, 
            x1: startPointX + w, 
            y1: startPointY, 
            x2: startPointX + w, 
            y2: startPointY + h, 
            lineWidth: 2, 
            strokeStyle: '#227346'
          })
        }

        // 下边线
        if (i === _end.y && j >= _start.x && j <= _end.x) {
          drawLine({
            context: ctx, 
            x1: startPointX, 
            y1: startPointY + h, 
            x2: startPointX + w, 
            y2: startPointY + h, 
            lineWidth: 2, 
            strokeStyle: '#227346'
          })
        }
      }
    }

    // 单元格canvas清除表头的区域
    ctx.clearRect(0, 0, rowWidth + 0.5, height);
    ctx.clearRect(0, 0, width, colHeight + 0.5);
  }

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

    // console.log('focusCells', focusCells)

    for (let index = start; index <= end; index++) {
      // 当前单元格宽度
      const width = this.colWidth(index);
      // 单元格开始位置
      const startPointX = startLeft - 0.5;
      // 下一个单元格开始位置
      startLeft += width;
      
      ctx.beginPath();
      // 矩形填充
      fillRect({ context: ctx, fillStyle: '#f5f5f5', x: startPointX, y: 0, width, height: colHeight });
      // 矩形边框
      strokeRect({ context: ctx, strokeStyle: '#cecece', x: startPointX, y: 0, width, height: colHeight });
      // 文本
      fillText({
        context: ctx,
        font: '16px PingFang SC',
        fillStyle: '#333',
        textAlign: 'center',
        text: colTitle(index + 1),
        x: startPointX + width / 2,
        y: colHeight / 2
      });
      ctx.stroke();
      ctx.closePath();
    }
    ctx.clearRect(0, 0, rowWidth, colHeight);
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
    const { rowWidth, colHeight } = this.state;

    // 先擦除后绘制
    ctx.clearRect(0, 0, rowWidth - 1, h);

    let startTop = y + colHeight;

    for (let index = start; index <= end; index++) {
      // 当前单元格宽度
      const height = this.rowHeight(index);
      // 单元格开始位置
      const startPointY = startTop - 0.5;
      // 下一个单元格开始位置
      startTop += height;
      
      ctx.beginPath();

      // 矩形填充
      fillRect({ context: ctx, fillStyle: '#f5f5f5', x: 0, y: startPointY, width: rowWidth, height });
      // 矩形边框
      strokeRect({ context: ctx, strokeStyle: '#cecece', x: 0, y: startPointY, width: rowWidth, height });
      // 文本
      fillText({
        context: ctx,
        font: '16px PingFang SC',
        fillStyle: '#333',
        textAlign: 'center',
        text: index + 1,
        x: rowWidth / 2,
        y: startPointY + height / 2
      });
      ctx.stroke();
      ctx.closePath();
      ctx.clearRect(0, 0, rowWidth, colHeight);
    }
  }

  setCursor = (type = 'pointer') => {
    this.setState((prevState) => ({
      style: {
        ...prevState.style,
        cursor: type,
      }
    }))
  };

  handleMouseDown() {
    this.mouseDownSign = true;
  }

  handleMouseLeave() {
    this.mouseDownSign = false;
  }

  handleMouseUp(e) {
    this.mouseDownSign = false;
    const { x, y } = this.position(e);
    let start = null;
    let end = null;
    if (x < 0 && y >= 0) {
      start = {x: 0, y};
      end = {x: Number.MAX_VALUE, y};
    } else if (x >= 0 && y < 0) {
      start = {x, y: 0};
      end = {x, y: Number.MAX_VALUE};
    } else if (x < 0 && y < 0) {
      start = {x: 0, y: 0};
      end = {x: Number.MAX_VALUE, y: Number.MAX_VALUE};
    } else {
      start = {x, y};
      end = {x, y};
    }

    this.setState({ 
      focusCells: handleFocusCells(start, end)
    }, () => { this.paintInit() });
  }

  handleMouseMove(e) {
    if (!this.mouseDownSign || timer) return;
    const {pageX, pageY, currentTarget } = e;
    timer = setTimeout(() => {
      timer = null;
      const {x, y} = this.position({pageX, pageY, currentTarget});
      const focusCells = {...this.state.focusCells};
      if (focusCells.start) {
        focusCells.end = { x, y }
      } else {
        focusCells.start = { x, y }
      }
      this.setState({ focusCells: handleFocusCells(focusCells.start, focusCells.end) }, () => { this.paintInit() });
    }, 100);
  }

  position(e) {
    const {clientX, clientY, currentTarget } = e;
    const offsetLeft = clientX - (currentTarget.getBoundingClientRect().left - document.documentElement.clientLeft)
    const offsetTop = clientY - (currentTarget.getBoundingClientRect().top - document.documentElement.clientTop)
    const { colHeight, rowWidth } = this.state;

    let x = null;
    let y = null;
    let row = null;
    let col = null;
    const { cellOffsetX, cellOffsetY, startRowIndex, startColIndex } = this.standard;

    if (offsetTop <= colHeight) {
      y = -1;
      row = -1;
    } else {
      y = startRowIndex;
      let col_acc = colHeight + cellOffsetY + this.rowHeight(y);
      while (col_acc <= offsetTop) {
        y++;
        col_acc += this.rowHeight(y);
      }
      row = y + 1;
    }

    if (offsetLeft <= rowWidth) {
      x = -1;
      col = -1;
    } else {
      x = startColIndex;
      let row_acc = rowWidth + cellOffsetX + this.colWidth(x);
      while (row_acc <= offsetLeft) {
        x++;
        row_acc += this.colWidth(x);
      }
      col = x + 1;
    }
    
    return { 
      x, 
      y, 
      row, 
      col: colTitle(col), 
      cell: `${colTitle(col)}${row}`, 
      offsetLeft,
      offsetTop 
    }
  }

  render() {
    const { 
      styles, 
      // focusCellStyle, 
      // canvasStyle, 
      // scrollLeft, 
      // scrollTop, 
      // pageX, pageY 
    } = this.state;
    const { style, className } = this.props;
    const _className = cx('excel-wrap', className);
    const _style = { ...style, ...styles };
    // const _focusCellStyle = {
    //   ...focusCellStyle,
    //   top: focusCellStyle.top - scrollTop,
    //   left: focusCellStyle.left - scrollLeft
    // }
    return (
      <div 
        id="canvas_wrap" 
        style={_style} 
        className={_className} 
        // onClick={(e) => this.handleMouseUp(e)}
        onMouseDown={(e) => this.handleMouseDown(e)}
        onMouseUp={(e) => this.handleMouseUp(e)}
        onMouseMove={(e) => this.handleMouseMove(e)}
        onMouseLeave={(e) => this.handleMouseLeave(e)}
      >
        <canvas id="row-col-canvas" />
        <canvas id="content-canvas" />
        {/* <div className='excel-focus-cell' style={_focusCellStyle}>12</div> */}
        {/* <div style={{
          position: 'absolute',
          left: pageX,
          top: pageY,
          zIndex: 6
        }}>1</div> */}
      </div>
    );
  }
}