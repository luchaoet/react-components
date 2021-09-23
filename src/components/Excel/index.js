import React, { Component } from 'react';
import cx from 'classnames';
import { colTitle, isFirefox, drawLine } from './tools'
import './index.scss';

export default class Scroll extends Component {
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
    this.position = this.position.bind(this);
    this.colWidth = this.colWidth.bind(this);
    this.rowHeight = this.rowHeight.bind(this);
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
        start: { x: 0, y: 0 },
        end: null
      },
      canvasStyle: {},
      dataSource: props.dataSource,
      pageX: -100, 
      pageY: 100,
      dataSource: props.dataSource,
    };
  }

  // row 行 col 列
  componentDidMount() {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        this.paintInit(entry.target);
      }
    });
    const dom = document.querySelector('#canvas_wrap');
    resizeObserver.observe(dom);

    dom?.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', this.handleWheel);
    // dom?.addEventListener('mousemove', this.handleMousemove, true);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: nextProps.dataSource
    }, () => {
      this.paintInit();
    })
  }

  handleWheel(e) {
    e.preventDefault();
    const { deltaX, deltaY } = e;
    const { scrollTop, scrollLeft, rowWidth } = this.state;
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

  handleMousemove = (e) => {
    console.log(this.position(e))
  }

  paintInit(dom) {
    dom = dom || document.querySelector('#canvas_wrap');
    const { endColIndex } = this.standard;
    endColIndex && this.setState({rowWidth: this.defaultConfig.rowWidth + (endColIndex.toString().length - 1) * 10})
    if(dom){
      const { width, height } = dom.getBoundingClientRect();
      this.canvasInit(width, height);
    }
  }

  canvasInit(w, h) {
    const rowColCanvas = document.getElementById('row-col-canvas');
    const contentCanvas = document.getElementById('content-canvas');
    if(!rowColCanvas || !contentCanvas)return;

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
    let startRowIndex = 0;
    let offsetX = this.colWidth(startRowIndex);
    while (offsetX < scrollLeft) {
      startRowIndex ++;
      offsetX += this.colWidth(startRowIndex);
    }
    // 寻找结束位置处是第几列
    // 宽度累加 寻找可视区域需要绘制到多少列 默认最初的宽度是第一列显示出来的宽度
    let row_acc = offsetX - scrollLeft;
    let endRowIndex = startRowIndex;
    while(row_acc < w) {
      endRowIndex ++;
      row_acc += this.colWidth(endRowIndex);
    }
    // 可视区域第一列绘制的起始位置 列偏移量
    const cellOffsetX = offsetX - scrollLeft - this.colWidth(startRowIndex);;

    // 寻找开始位置处是第几行
    let startColIndex = 0;
    let offsetY = this.rowHeight(startColIndex);
    while (offsetY < scrollTop) {
      startColIndex ++;
      offsetY += this.rowHeight(startColIndex);
    }
    // 寻找结束位置处是第几行
    // 高度累加 寻找可视区域需要绘制到多少行 默认最初的宽度是第一行显示出来的高度
    let col_acc = offsetY - scrollTop;
    let endColIndex = startColIndex;
    while(col_acc < h) {
      endColIndex ++;
      col_acc += this.rowHeight(endColIndex);
    }

    // 可视区域第一行绘制的起始位置 行偏移量
    const cellOffsetY = offsetY - scrollTop - this.rowHeight(endColIndex);

    this.standard = {
      cellOffsetX, startRowIndex, endRowIndex,
      cellOffsetY, startColIndex, endColIndex,
      width: w, height: h
    }

    // 列头 从x位置开始绘制 startRowIndex列 到 startRowIndex + 20列
    this.paintRow(rcctx, cellOffsetX, startRowIndex, endRowIndex, w);
    // 行头
    this.paintCol(rcctx, cellOffsetY, startColIndex, endColIndex, h);

    // 竖线
    // this.paintVerticalLine(cctx, cellOffsetX, startRowIndex, endRowIndex, h);
    // // 水平线
    // this.paintHorizontalLine(cctx, cellOffsetY, startColIndex, endColIndex, w);

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
    })

  }
  paintCells = ({ctx, cellOffsetX, cellOffsetY, startRowIndex, endRowIndex, startColIndex, endColIndex, width, height}) => {
    const { rowWidth, colHeight, dataSource } = this.state;
    let startTop = cellOffsetY + colHeight;
    
    for (let i = startColIndex; i <= endColIndex; i++) {
      // 当前单元格宽度
      const h = this.rowHeight(i);
      // 单元格开始位置
      const startPointY = startTop - 0.5;
      // 下一个单元格开始位置
      startTop += h;
      
      let startLeft = cellOffsetX + rowWidth;
      for (let j = startRowIndex; j <= endRowIndex; j++) {
        const text = dataSource?.[i]?.[j] || '';
        const w = this.colWidth(j)
        // 单元格开始位置
        const startPointX = startLeft - 0.5;
        // 下一个单元格开始位置
        startLeft += w;
        // 矩形填充
        ctx.fillStyle = '#fff';
        ctx.fillRect(startPointX, startPointY, w, h);
        // 矩形边框
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#cecece';
        ctx.strokeRect(startPointX, startPointY, w, h);

        // 文本
        ctx.globalCompositeOperation = 'source-over';
        ctx.font = '16px PingFang SC';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, startPointX + w / 2, startPointY + h / 2);

      }
    }

    ctx.clearRect(0, 0, rowWidth, height);
    ctx.clearRect(0, 0, width, colHeight);
  }

  /**
   * 绘制可视区域的列头
   * @param {*} ctx 
   * @param {*} x 首个单元格的起始位置
   * @param {*} start 起始单元格的索引
   * @param {*} end 结束单元格的索引
   */
  paintRow(ctx, x, start, end, w) {
    const { rowWidth, widths, cellWidth, colHeight } = this.state;

    // 先擦除后绘制
    ctx.clearRect(0, 0, w, colHeight);

    let startLeft = x + rowWidth;

    for (let index = start; index <= end; index++) {
      // 当前单元格宽度
      const width = this.colWidth(index);
      // 单元格开始位置
      const startPointX = startLeft - 0.5;
      // 下一个单元格开始位置
      startLeft += width;
      
      ctx.beginPath();

      // 矩形填充
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(startPointX, 0, width, colHeight);

      // 矩形边框
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#cecece';
      ctx.strokeRect(startPointX, 0, width, colHeight);

      // 文本
      ctx.globalCompositeOperation = 'source-over';
      ctx.font = '16px PingFang SC';
      ctx.fillStyle = '#333';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // 绘制列名
      ctx.fillText(colTitle(index + 1), startPointX + width / 2, colHeight / 2);
      ctx.stroke();
      ctx.closePath();
    }
    ctx.clearRect(0, 0, rowWidth - 0.5, colHeight + 1);
  }

  /**
   * 绘制可视区域的行头
   * @param {*} ctx 
   * @param {*} y 首个单元格的起始位置
   * @param {*} start 起始单元格的索引
   * @param {*} end 结束单元格的索引
   * @param {*} h 
   */
  paintCol(ctx, y, start, end, h) {
    const { rowWidth, colHeight } = this.state;

    // 先擦除后绘制
    ctx.clearRect(0, 0, rowWidth, h);

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
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(0, startPointY, rowWidth, height);

      // 矩形边框
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#cecece';
      ctx.strokeRect(0, startPointY, rowWidth, height);

      // 文本
      ctx.globalCompositeOperation = 'source-over';
      ctx.font = '16px PingFang SC';
      ctx.fillStyle = '#333';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // 绘制列名
      ctx.fillText(index + 1, rowWidth / 2, startPointY + height / 2);
      ctx.stroke();
      ctx.closePath();
      ctx.clearRect(0, 0, rowWidth - 0.5, colHeight + 1);
    }
  }

  paintVerticalLine(ctx, x, start, end, h) {
    const { rowWidth, widths, cellWidth, colHeight } = this.state;

    let startLeft = x + rowWidth;

    // 竖线
    for (let index = start; index <= end; index++) {
      // 当前单元格宽度
      const width = this.colWidth(index);
      // 单元格开始位置
      const startPointX = startLeft - 0.5;
      // 下一个单元格开始位置
      startLeft += width;


      drawLine({ 
        context: ctx, 
        x1: startPointX, 
        y1: colHeight, 
        x2: startPointX, 
        y2: h,
      })
    }
  }

  paintHorizontalLine(ctx, y, start, end, w) {
    const { rowWidth, colHeight } = this.state;

    let startTop = y + colHeight;

    // 竖线
    for (let index = start; index <= end; index++) {
      // 当前单元格宽度
      const height = this.rowHeight(index);
      // 单元格开始位置
      const startPointY = startTop - 0.5;
      // 下一个单元格开始位置
      startTop += height;

      drawLine({ 
        context: ctx, 
        x1: rowWidth, 
        y1: startPointY, 
        x2: w, 
        y2: startPointY,
      })
    }
  }

  setCursor = (type = 'pointer') => {
    this.setState({
      style: {
        ...this.state.style,
        cursor: type,
      },
    });
  };

  handleCanvasClick = (e) => {
    console.log(this.position(e))
  }

  position(e) {
    const {pageX, pageY, currentTarget } = e;
    const offsetLeft = pageX - currentTarget.offsetLeft;
    const offsetTop = pageY - currentTarget.offsetTop;
    const { colHeight, rowWidth, scrollTop, scrollLeft } = this.state;

    let x = null, y = null, row = null, col = null;
    const { cellOffsetX, cellOffsetY, startRowIndex, startColIndex } = this.standard;

    if(offsetTop <= colHeight) {
      y = -1;
      row = -1;
    }else{
      y = startColIndex;
      let col_acc = colHeight + cellOffsetY + this.rowHeight(y);
      while(col_acc <= offsetTop) {
        y++;
        col_acc += this.rowHeight(y);
      }
      row = y + 1;
    }

    if(offsetLeft <= rowWidth) {
      x = -1;
      col = -1;
    }else{
      x = startRowIndex;
      let row_acc = rowWidth + cellOffsetX + this.colWidth(x);
      while(row_acc <= offsetLeft) {
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

  /**
   * @param {*} i 第几列
   * @returns 列宽
   */
  colWidth(i) {
    const { widths, cellWidth } = this.state;
    return widths[i] || cellWidth;
  }

  /**
   * @param {*} i 第几行
   * @returns 行高
   */
  rowHeight(i) {
    const { heights, cellHeight } = this.state;
    return heights[i] || cellHeight;
  }

  render() {
    const { styles, focusCellStyle, canvasStyle, scrollLeft, scrollTop, pageX, pageY } = this.state;
    const { style, className } = this.props;
    const _className = cx('excel-wrap', className);
    const _style = { ...style, ...styles };
    const _focusCellStyle = {
      ...focusCellStyle,
      top:  focusCellStyle.top - scrollTop,
      left:  focusCellStyle.left - scrollLeft
    }
    // console.log(pageX, pageY)
    return <div className={_className} style={_style} id="canvas_wrap" onClick={this.handleCanvasClick}>
      <canvas id="row-col-canvas"></canvas>
      <canvas id="content-canvas"></canvas>
      {/* <div className='excel-focus-cell' style={_focusCellStyle}>12</div> */}
      {/* <div style={{
        position: 'absolute',
        left: pageX,
        top: pageY,
        zIndex: 6
      }}>1</div> */}
    </div>;
  }
}