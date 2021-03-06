"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawLine = drawLine;
exports.fillRect = fillRect;
exports.strokeRect = strokeRect;
exports.fillText = fillText;
exports.colWidth = colWidth;
exports.rowHeight = rowHeight;
exports.handleFocusCells = handleFocusCells;
exports.tableToArray = tableToArray;
exports.arrayToTable = arrayToTable;
exports.type = type;
exports.handleColumnNames = handleColumnNames;
exports.isFirefox = exports.base26 = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Base26 = /*#__PURE__*/function () {
  function Base26() {
    _classCallCheck(this, Base26);

    _defineProperty(this, "words", ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  }

  _createClass(Base26, [{
    key: "column",
    value: function column(index) {
      var _this2 = this;

      // index ??? 1 ??????
      var _colTitle = function _colTitle(i) {
        if (i <= 26) {
          return _this2.words[i];
        }

        var floor = Math.floor(i / 26);
        var rem = i % 26;

        if (rem === 0) {
          // ??????26?????????
          return "".concat(_colTitle(floor - 1)).concat(_colTitle(26));
        } else {
          return "".concat(_colTitle(floor)).concat(_this2.words[rem]);
        }
      };

      return _colTitle(index);
    }
  }, {
    key: "index",
    value: function index(col) {
      if (/^[a-zA-Z]+$/.test(col)) {
        var _col = col.toUpperCase().split('').reverse();

        return _col.reduce(function (accumulator, current, index) {
          return accumulator + (current.charCodeAt() - 64) * Math.pow(26, index);
        }, 0);
      } else {
        return -1;
      }
    }
  }]);

  return Base26;
}();

var base26 = new Base26();
exports.base26 = base26;
var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1; // ??????

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
  context.strokeStyle = strokeStyle; // ??????????????????

  context.lineCap = 'square';
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.closePath();
  context.stroke();
} // ????????????


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
} // ????????????


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
} // ??????


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
}

function colWidth(i) {
  var _this$state = this.state,
      widths = _this$state.widths,
      cellWidth = _this$state.cellWidth;
  return widths[i] || cellWidth;
} // ????????????


function rowHeight(i) {
  var _this$state2 = this.state,
      heights = _this$state2.heights,
      cellHeight = _this$state2.cellHeight;
  return heights[i] || cellHeight;
}

function handleFocusCells(start, end) {
  var _start = start || {
    x: -1,
    y: -1
  };

  var _end = end || {
    x: -1,
    y: -1
  };

  if (start && end) {
    // ??????????????????????????????????????????????????????????????????????????????????????????->??????????????????????????????
    var _x = [start.x, end.x].bubbleSort();

    var _y = [start.y, end.y].bubbleSort();

    _start = {
      x: _x[0] || 1,
      y: _y[0] || 1
    };
    _end = {
      x: _x[1] || 1,
      y: _y[1] || 1
    };
  }

  return {
    start: _start,
    end: _end
  };
}

function tableToArray(table) {
  var dom = new DOMParser().parseFromString(table, 'text/html'); // ??????????????????

  var trs = Array.from(dom.querySelectorAll('table tr'));
  return trs.map(function (item) {
    return _toConsumableArray(item.children).map(function (c) {
      return {
        format: 'string',
        value: c.innerText
      };
    });
  });
}

function arrayToTable(array) {
  return "\n  <meta charset='utf-8'>\n  <table>\n      <tbody>\n          <tr>\n              <td>\u66F4\u591A\u5F00\u53D1\u5DE5\u5177</td>\n          </tr>\n      </tbody>\n  </table>\n  ";
} // eslint-disable-next-line no-extend-native


Array.prototype.bubbleSort = function () {
  var _this = _toConsumableArray(this);

  var len = _this.length; // ??????????????????????????????????????????????????????????????????????????????

  for (var i = 0; i < len - 1; i++) {
    // ??????i??????????????????????????????????????????
    // i -> 0 -> len - 1
    // i -> 1 -> len - 2
    // ...
    for (var j = 0; j < len - 1 - i; j++) {
      // ???????????????????????????????????????????????????
      if (_this[j] > _this[j + 1]) {
        var element = _this[j];
        _this[j] = _this[j + 1];
        _this[j + 1] = element;
      }
    }
  }

  return _this;
};

var class2type = {
  '[object Array]': 'array',
  '[object Boolean]': 'boolean',
  '[object Date]': 'date',
  '[object Error]': 'error',
  '[object Function]': 'function',
  '[object Number]': 'number',
  '[object Object]': 'object',
  '[object RegExp]': 'regexp',
  '[object String]': 'string'
};

function type(obj) {
  return obj == null ? String(obj) : class2type[toString.call(obj)] || 'object';
} // ???????????? props 


function handleColumnNames(dataSource) {
  var _type = type(dataSource);

  var temp = {};

  if (_type === 'object') {
    temp = dataSource;
  } else if (_type === 'array') {
    for (var i = 0; i < dataSource.length; i++) {
      var alp = base26.column(i + 1);
      temp[alp] = String(dataSource[i]);
    }
  }

  return temp;
}