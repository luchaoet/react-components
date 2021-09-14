"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var words = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // for (let i = 0; i < 100; i++) {
//   console.log(i, returnAZ(i))
// }
// function returnAZ(num) {
//   const a = num%26
//   const b = Math.floor(num/26)
//   console.log(a)
//   return b > 0 ? returnAZ(b) : '' + words[a]
// }

var Scroll = /*#__PURE__*/function (_Component) {
  _inherits(Scroll, _Component);

  var _super = _createSuper(Scroll);

  function Scroll(props) {
    var _this;

    _classCallCheck(this, Scroll);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setCursor", function () {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pointer';

      _this.setState({
        style: _objectSpread(_objectSpread({}, _this.state.style), {}, {
          cursor: type
        })
      });
    });

    _this.handleWheel = _this.handleWheel.bind(_assertThisInitialized(_this));
    _this.state = {
      widths: {},
      heights: {},
      style: {},
      scrollTop: 100,
      scrollLeft: 100
    };
    return _this;
  } // row 行 col 列


  _createClass(Scroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var resizeObserver = new ResizeObserver(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            _this2.canvasInit(entry.target);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      var dom = document.querySelector('#canvas_wrap');
      resizeObserver.observe(dom);
      dom === null || dom === void 0 ? void 0 : dom.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', this.handleWheel);
      dom === null || dom === void 0 ? void 0 : dom.addEventListener('mousemove', this.handleMousemove, true);
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      var _this3 = this;

      e.preventDefault();
      var deltaX = e.deltaX,
          deltaY = e.deltaY;
      var _this$state = this.state,
          scrollTop = _this$state.scrollTop,
          scrollLeft = _this$state.scrollLeft;

      var _scrollTop = scrollTop + deltaY;

      var _scrollLeft = scrollLeft + deltaX;

      this.setState({
        scrollTop: _scrollTop <= 0 ? 0 : _scrollTop,
        scrollLeft: _scrollLeft <= 0 ? 0 : _scrollLeft
      }, function () {
        _this3.canvasInit();
      });
    }
  }, {
    key: "handleMousemove",
    value: function handleMousemove(e) {// console.log(e);
    }
  }, {
    key: "canvasInit",
    value: function canvasInit(dom) {
      dom = dom || document.querySelector('#canvas_wrap');
      var _this$state2 = this.state,
          widths = _this$state2.widths,
          heights = _this$state2.heights;

      var _dom$getBoundingClien = dom.getBoundingClientRect(),
          width = _dom$getBoundingClien.width,
          height = _dom$getBoundingClien.height;

      dom.innerHTML = '';
      var canvas = createElement(width, height);
      var canvas2 = createElement(width, height);
      var scrollLeft = this.state.scrollLeft; // console.log(scrollLeft);

      var y = 25;
      var startRowIndex = 0; // let endRowIndex = 0;

      while (y < scrollLeft) {
        y = y + (widths[startRowIndex] || 80);
        startRowIndex++;
      }

      var x = y - (widths[startRowIndex] || 80) - scrollLeft; // console.log(x);

      dom.appendChild(canvas);
      dom.appendChild(canvas2);
      this.paint(canvas);
      this.paintRowCanvas(canvas2, x, startRowIndex, 1000); // this.paintColCanvas(canvas2, startColIndex, endColIndex);
    }
  }, {
    key: "paintRowCanvas",
    value: function paintRowCanvas(canvas, x, start, end) {
      var ctx = canvas.getContext('2d');
      var startX = x + 25;
      var i = 0;

      for (var index = start; index < end; index++) {
        ctx.beginPath();
        var startPointX = i * 80 - 0.5 + startX;
        var startPointY = 0; // 矩形填充

        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(startPointX, startPointY, 80, 25); // 矩形边框

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#cecece';
        ctx.strokeRect(startPointX, startPointY, 80, 25);
        ctx.globalCompositeOperation = 'source-over'; // 文本

        ctx.font = '16px PingFang SC';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(index + 1, startPointX + 40, startPointY + 12.5);
        ctx.stroke();
        ctx.closePath();
        i++;
      }

      for (var _index = 0; _index < 20; _index++) {
        ctx.beginPath();
        var startY = 25;
        var _startPointX = 0;

        var _startPointY = _index * 25 - 0.5 + startY; // 矩形填充


        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(_startPointX, _startPointY, 25, 25); // 矩形边框

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#cecece';
        ctx.strokeRect(_startPointX, _startPointY, 25, 25);
        ctx.globalCompositeOperation = 'source-over'; // 文本

        ctx.font = '14px PingFang SC';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(_index + 1, _startPointX + 12.5, _startPointY + 12.5);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }, {
    key: "paint",
    value: function paint(canvas) {
      var _canvas$getBoundingCl = canvas.getBoundingClientRect(),
          width = _canvas$getBoundingCl.width,
          height = _canvas$getBoundingCl.height;

      var ctx = canvas.getContext('2d'); // 横线

      for (var index = 0; index < height / 25; index++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#cecece';
        var startPointX = 25;
        var startPointY = index * 25 - 0.5;
        ctx.moveTo(startPointX, startPointY);
        ctx.lineTo(startPointX + width, startPointY);
        ctx.stroke();
        ctx.closePath();
      } // 竖线


      for (var _index2 = 0; _index2 < 100; _index2++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#cecece';

        var _startPointX2 = 25 + _index2 * 80 - 0.5;

        var _startPointY2 = 25;
        ctx.moveTo(_startPointX2, _startPointY2);
        ctx.lineTo(_startPointX2, _startPointY2 + height);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var sty = this.state.style;
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className;

      var _className = (0, _classnames["default"])('excel-wrap', className);

      var _style = _objectSpread(_objectSpread({}, style), sty);

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _className,
        style: _style,
        id: "canvas_wrap"
      });
    }
  }]);

  return Scroll;
}(_react.Component);

exports["default"] = Scroll;

function createElement() {
  var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;
  var ratio = window.devicePixelRatio || 1;
  var canvas = document.createElement('canvas');
  canvas.width = w * ratio; // 实际渲染像素

  canvas.height = h * ratio; // 实际渲染像素

  canvas.style.width = "".concat(w, "px"); // 控制显示大小

  canvas.style.height = "".concat(h, "px"); // 控制显示大小

  canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
  return canvas;
}

function drawLine(_ref) {
  var context = _ref.context,
      _ref$startPointX = _ref.startPointX,
      startPointX = _ref$startPointX === void 0 ? 0 : _ref$startPointX,
      _ref$startPointY = _ref.startPointY,
      startPointY = _ref$startPointY === void 0 ? 0 : _ref$startPointY,
      _ref$lineWidth = _ref.lineWidth,
      lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
      _ref$strokeStyle = _ref.strokeStyle,
      strokeStyle = _ref$strokeStyle === void 0 ? '#333' : _ref$strokeStyle,
      height = _ref.height;
  context.beginPath();
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle;
  var linkStartPointX = startPointX;
  var linkStartPointY = startPointY;
  context.moveTo(linkStartPointX, linkStartPointY);
  context.lineTo(linkStartPointX + height, linkStartPointY);
  context.stroke();
  context.closePath();
} // const _words = [
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