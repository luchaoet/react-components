"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colTitle = colTitle;
exports.drawLine = drawLine;
exports.fillRect = fillRect;
exports.strokeRect = strokeRect;
exports.fillText = fillText;
exports.colWidth = colWidth;
exports.rowHeight = rowHeight;
exports.handleFocusCells = handleFocusCells;
exports.isFirefox = void 0;

// 列名
function colTitle(index) {
  var words = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return _colTitle(index); // index 从 1 开始

  function _colTitle(i) {
    if (i <= 26) {
      return words[i];
    }

    var floor = Math.floor(i / 26);
    var rem = i % 26;

    if (rem === 0) {
      // 处理26的倍数
      return "".concat(_colTitle(floor - 1)).concat(_colTitle(26));
    } else {
      return "".concat(_colTitle(floor)).concat(words[rem]);
    }
  }
}

var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1; // 画线

exports.isFirefox = isFirefox;

function drawLine(_ref) {
  var context = _ref.context,
      _ref$x = _ref.x1,
      x1 = _ref$x === void 0 ? 0 : _ref$x,
      _ref$y = _ref.y1,
      y1 = _ref$y === void 0 ? 0 : _ref$y,
      _ref$x2 = _ref.x2,
      x2 = _ref$x2 === void 0 ? 0 : _ref$x2,
      _ref$y2 = _ref.y2,
      y2 = _ref$y2 === void 0 ? 0 : _ref$y2,
      _ref$lineWidth = _ref.lineWidth,
      lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
      _ref$strokeStyle = _ref.strokeStyle,
      strokeStyle = _ref$strokeStyle === void 0 ? '#cecece' : _ref$strokeStyle;
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle; // 线条末端形状

  context.lineCap = "square";
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
} // 矩形填充


function fillRect(_ref2) {
  var context = _ref2.context,
      x = _ref2.x,
      y = _ref2.y,
      width = _ref2.width,
      height = _ref2.height,
      _ref2$fillStyle = _ref2.fillStyle,
      fillStyle = _ref2$fillStyle === void 0 ? '#f5f5f5' : _ref2$fillStyle;
  context.fillStyle = fillStyle;
  context.fillRect(x, y, width, height);
} // 矩形边框


function strokeRect(_ref3) {
  var context = _ref3.context,
      _ref3$lineWidth = _ref3.lineWidth,
      lineWidth = _ref3$lineWidth === void 0 ? 1 : _ref3$lineWidth,
      _ref3$strokeStyle = _ref3.strokeStyle,
      strokeStyle = _ref3$strokeStyle === void 0 ? '#cecece' : _ref3$strokeStyle,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y,
      width = _ref3.width,
      height = _ref3.height;
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle;
  context.strokeRect(x, y, width, height);
} // 文本


function fillText(_ref4) {
  var context = _ref4.context,
      _ref4$globalComposite = _ref4.globalCompositeOperation,
      globalCompositeOperation = _ref4$globalComposite === void 0 ? 'source-over' : _ref4$globalComposite,
      _ref4$font = _ref4.font,
      font = _ref4$font === void 0 ? '14px' : _ref4$font,
      fillStyle = _ref4.fillStyle,
      _ref4$textAlign = _ref4.textAlign,
      textAlign = _ref4$textAlign === void 0 ? 'left' : _ref4$textAlign,
      _ref4$textBaseline = _ref4.textBaseline,
      textBaseline = _ref4$textBaseline === void 0 ? 'middle' : _ref4$textBaseline,
      text = _ref4.text,
      _ref4$x = _ref4.x,
      x = _ref4$x === void 0 ? 0 : _ref4$x,
      _ref4$y = _ref4.y,
      y = _ref4$y === void 0 ? 0 : _ref4$y;
  context.globalCompositeOperation = globalCompositeOperation;
  context.font = font;
  context.fillStyle = fillStyle;
  context.textAlign = textAlign;
  context.textBaseline = textBaseline;
  context.fillText(text, x, y);
} // function createElement(w = 300, h = 150) {
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


function colWidth(i) {
  var _this$state = this.state,
      widths = _this$state.widths,
      cellWidth = _this$state.cellWidth;
  return widths[i] || cellWidth;
} // 某行的高


function rowHeight(i) {
  var _this$state2 = this.state,
      heights = _this$state2.heights,
      cellHeight = _this$state2.cellHeight;
  return heights[i] || cellHeight;
}

function handleFocusCells(start, end) {
  var _start = start;
  var _end = end;

  if (start.x > end.x || start.x === end.x && start.y > start.y) {
    _start = end;
    _end = start;
  }

  return {
    start: _start,
    end: _end
  };
}