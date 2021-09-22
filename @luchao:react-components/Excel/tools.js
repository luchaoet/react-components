"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colTitle = colTitle;
exports.drawLine = drawLine;
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
  context.beginPath();
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
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