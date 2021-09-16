import React, { Component } from 'react';
import cx from 'classnames';
import './index.scss';
const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

export default class Scroll extends Component {
  constructor(props) {
    super(props);
    this.handleWheel = this.handleWheel.bind(this);
    this.state = {
      widths: {},
      heights: {},
      style: {},
      scrollTop: 100,
      scrollLeft: 100,
    };
  }

  // row 行 col 列

  componentDidMount() {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        this.canvasInit(entry.target);
      }
    });
    const dom = document.querySelector('#canvas_wrap');
    resizeObserver.observe(dom);

    dom?.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', this.handleWheel);
    dom?.addEventListener('mousemove', this.handleMousemove, true);
  }

  handleWheel(e) {
    e.preventDefault();
    const { deltaX, deltaY } = e;
    const { scrollTop, scrollLeft } = this.state;
    const _scrollTop = scrollTop + deltaY;
    const _scrollLeft = scrollLeft + deltaX;
    this.setState(
      {
        scrollTop: _scrollTop <= 0 ? 0 : _scrollTop,
        scrollLeft: _scrollLeft <= 0 ? 0 : _scrollLeft,
      },
      () => {
        this.canvasInit();
      },
    );
  }

  handleMousemove(e) {
    // console.log(e);
  }

  canvasInit(dom) {
    dom = dom || document.querySelector('#canvas_wrap');
    const { widths, heights } = this.state;
    const { width, height } = dom.getBoundingClientRect();
    dom.innerHTML = '';
    const canvas = createElement(width, height);
    const canvas2 = createElement(width, height);

    let scrollLeft = this.state.scrollLeft;
    // console.log(scrollLeft);
    let y = 25;
    let startRowIndex = 0;
    // let endRowIndex = 0;
    while (y < scrollLeft) {
      y = y + (widths[startRowIndex] || 80);
      startRowIndex++;
    }

    const x = y - (widths[startRowIndex] || 80) - scrollLeft;
    // console.log(x);

    dom.appendChild(canvas);
    dom.appendChild(canvas2);
    this.paint(canvas);
    this.paintRowCanvas(canvas2, x, startRowIndex, 1000);
    // this.paintColCanvas(canvas2, startColIndex, endColIndex);
  }

  paintRowCanvas(canvas, x, start, end) {
    const ctx = canvas.getContext('2d');
    const startX = x + 25;
    let i = 0;
    for (let index = start; index < end; index++) {
      ctx.beginPath();
      const startPointX = i * 80 - 0.5 + startX;
      const startPointY = 0;
      // 矩形填充
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(startPointX, startPointY, 80, 25);
      // 矩形边框
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#cecece';
      ctx.strokeRect(startPointX, startPointY, 80, 25);

      ctx.globalCompositeOperation = 'source-over';
      // 文本
      ctx.font = '16px PingFang SC';
      ctx.fillStyle = '#333';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(index + 1, startPointX + 40, startPointY + 12.5);
      ctx.stroke();
      ctx.closePath();
      i++;
    }
    for (let index = 0; index < 20; index++) {
      ctx.beginPath();
      const startY = 25;
      const startPointX = 0;
      const startPointY = index * 25 - 0.5 + startY;
      // 矩形填充
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(startPointX, startPointY, 25, 25);
      // 矩形边框
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#cecece';
      ctx.strokeRect(startPointX, startPointY, 25, 25);

      ctx.globalCompositeOperation = 'source-over';
      // 文本
      ctx.font = '14px PingFang SC';
      ctx.fillStyle = '#333';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(index + 1, startPointX + 12.5, startPointY + 12.5);
      ctx.stroke();
      ctx.closePath();
    }
  }

  paint(canvas) {
    const { width, height } = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    // 横线
    for (let index = 0; index < height / 25; index++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#cecece';
      const startPointX = 25;
      const startPointY = index * 25 - 0.5;
      ctx.moveTo(startPointX, startPointY);
      ctx.lineTo(startPointX + width, startPointY);
      ctx.stroke();
      ctx.closePath();
    }
    // 竖线
    for (let index = 0; index < 100; index++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#cecece';
      const startPointX = 25 + index * 80 - 0.5;
      const startPointY = 25;
      ctx.moveTo(startPointX, startPointY);
      ctx.lineTo(startPointX, startPointY + height);
      ctx.stroke();
      ctx.closePath();
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

  render() {
    const { style: sty } = this.state;
    const { style, className } = this.props;
    const _className = cx('excel-wrap', className);
    const _style = { ...style, ...sty };
    return <div className={_className} style={_style} id="canvas_wrap"></div>;
  }
}

function createElement(w = 300, h = 150) {
  var ratio = window.devicePixelRatio || 1;
  var canvas = document.createElement('canvas');
  canvas.width = w * ratio; // 实际渲染像素
  canvas.height = h * ratio; // 实际渲染像素
  canvas.style.width = `${w}px`; // 控制显示大小
  canvas.style.height = `${h}px`; // 控制显示大小
  canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
  return canvas;
}

function drawLine({ context, startPointX = 0, startPointY = 0, lineWidth = 1, strokeStyle = '#333', height }) {
  context.beginPath();
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle;
  const linkStartPointX = startPointX;
  const linkStartPointY = startPointY;
  context.moveTo(linkStartPointX, linkStartPointY);
  context.lineTo(linkStartPointX + height, linkStartPointY);
  context.stroke();
  context.closePath();
}
// const _words = [
//   '',
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z',
// ];
// function rowName(index) {
//   if (index <= 25) {
//     return _words[index];
//   }

//   const floor = Math.floor(index / 26);
//   const rem = index % 26;

//   return rowName(floor) + _words[rem];
// }

// console.log(rowName(26));
// console.log(rowName(85852));

// for (let index = 85845; index < 85855; index++) {
//   const a = rowName(index);
//   console.log(a, index);
// }
