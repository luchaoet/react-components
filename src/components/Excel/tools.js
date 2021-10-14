// 列名
export function colTitle(index) {
  const words = [
      '',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
  ];
  return _colTitle(index);
  
  // index 从 1 开始
  function _colTitle(i) {
    if (i <= 26) {
        return words[i]
    }
    const floor = Math.floor(i / 26);
    const rem = i % 26;
    if (rem === 0) {
        // 处理26的倍数
        return `${_colTitle(floor - 1)}${_colTitle(26)}`
    } else {
        return `${_colTitle(floor)}${words[rem]}`
    }
  }
} 

export const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// 画线
export function drawLine({ context, x1 = 0, y1 = 0, x2 = 0, y2 = 0, lineWidth = 1, strokeStyle = '#cecece' }) {
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle;
  // 线条末端形状
  context.lineCap = "square";
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

// 矩形填充
export function fillRect({context, x, y, width, height, fillStyle = '#f5f5f5'}) {
  context.fillStyle = fillStyle;
  context.fillRect(x, y, width, height);
}

// 矩形边框
export function strokeRect({
  context, 
  lineWidth = 1, 
  strokeStyle = '#cecece', 
  x = 0, 
  y = 0, 
  width, 
  height
}) {
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle;
  context.strokeRect(x, y, width, height);
}

// 文本
export function fillText({
  context, 
  globalCompositeOperation = 'source-over', 
  font = '14px', 
  fillStyle, 
  textAlign = 'left', 
  textBaseline = 'middle', 
  text, 
  x = 0, 
  y = 0
}) {
  context.globalCompositeOperation = globalCompositeOperation;
  context.font = font;
  context.fillStyle = fillStyle;
  context.textAlign = textAlign;
  context.textBaseline = textBaseline;
  context.fillText(text, x, y);
}

// function createElement(w = 300, h = 150) {
//   var ratio = window.devicePixelRatio || 1;
//   var canvas = document.createElement('canvas');
//   canvas.width = w * ratio; // 实际渲染像素
//   canvas.height = h * ratio; // 实际渲染像素
//   canvas.style.width = `${w}px`; // 控制显示大小
//   canvas.style.height = `${h}px`; // 控制显示大小
//   canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
//   return canvas;
// }


// paintVerticalLine(ctx, x, start, end, h) {
//   const { rowWidth, colHeight } = this.state;

//   let startLeft = x + rowWidth;

//   // 竖线
//   for (let index = start; index <= end; index++) {
//     // 当前单元格宽度
//     const width = this.colWidth(index);
//     // 单元格开始位置
//     const startPointX = startLeft - 0.5;
//     // 下一个单元格开始位置
//     startLeft += width;

//     drawLine({ 
//       context: ctx, 
//       x1: startPointX, 
//       y1: colHeight, 
//       x2: startPointX, 
//       y2: h,
//     })
//   }
// }

// paintHorizontalLine(ctx, y, start, end, w) {
//   const { rowWidth, colHeight } = this.state;

//   let startTop = y + colHeight;

//   // 竖线
//   for (let index = start; index <= end; index++) {
//     // 当前单元格宽度
//     const height = this.rowHeight(index);
//     // 单元格开始位置
//     const startPointY = startTop - 0.5;
//     // 下一个单元格开始位置
//     startTop += height;

//     drawLine({ 
//       context: ctx, 
//       x1: rowWidth, 
//       y1: startPointY, 
//       x2: w, 
//       y2: startPointY,
//     })
//   }
// }

// 某列的宽
export function colWidth(i) {
  const { widths, cellWidth } = this.state;
  return widths[i] || cellWidth;
}

// 某行的高
export function rowHeight(i) {
  const { heights, cellHeight } = this.state;
  return heights[i] || cellHeight;
}

export function handleFocusCells(start, end) {
  let _start = start;
  let _end = end;
  if (start.x > end.x || (start.x === end.x && start.y > start.y)) {
    _start = end;
    _end = start;
  }
  return {
    start: _start,
    end: _end
  }
}