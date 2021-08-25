"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./index.scss");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

// interface State {
//   whs: {
//     ww: number;
//     wh: number;
//     cw: number;
//     ch: number;
//     scrollXTop: number;
//     scrollYTop: number;
//   };
//   isScrollMouseDown: Boolean;
//   wrap: any;
//   container: any;
// }
var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var Scroll = /*#__PURE__*/function (_Component) {
  _inherits(Scroll, _Component);

  var _super = _createSuper(Scroll);

  function Scroll(props) {
    var _this2;

    _classCallCheck(this, Scroll);

    _this2 = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this2), "wrap", /*#__PURE__*/_react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this2), "container", /*#__PURE__*/_react["default"].createRef());

    _this2.handleWheel = _this2.handleWheel.bind(_assertThisInitialized(_this2));
    _this2.init = _this2.init.bind(_assertThisInitialized(_this2));
    _this2.state = {
      wrap: null,
      container: null,
      whs: {
        ww: 0,
        wh: 0,
        cw: 0,
        ch: 0,
        scrollXTop: 0,
        scrollYTop: 0
      },
      isScrollMouseDown: false
    };
    return _this2;
  }

  _createClass(Scroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
      window.addEventListener('resize', this.init);
      var wrapDom = document.getElementById('scroll-wrap');
      wrapDom === null || wrapDom === void 0 ? void 0 : wrapDom.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', this.handleWheel);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState = function () {};

      window.removeEventListener('resize', this.init);
      var wrapDom = document.getElementById('scroll-wrap');
      wrapDom === null || wrapDom === void 0 ? void 0 : wrapDom.removeEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', this.handleWheel);
    }
  }, {
    key: "init",
    value: function init() {
      var wrapDom = document.getElementById('scroll-wrap');
      var containerDom = document.getElementById('scroll-container');
      if (!wrapDom || !containerDom) return;

      var _getComputedStyle = getComputedStyle(wrapDom, ''),
          ww = _getComputedStyle.width,
          wh = _getComputedStyle.height;

      var _getComputedStyle2 = getComputedStyle(containerDom, ''),
          cw = _getComputedStyle2.width,
          ch = _getComputedStyle2.height;

      this.setState({
        whs: _objectSpread(_objectSpread({}, this.state.whs), {}, {
          ww: toNumber(ww),
          wh: toNumber(wh),
          cw: toNumber(cw),
          ch: toNumber(ch)
        })
      });
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      e === null || e === void 0 ? void 0 : e.preventDefault();
      var deltaX = e.deltaX,
          deltaY = e.deltaY;
      var _this$state$whs = this.state.whs,
          ww = _this$state$whs.ww,
          wh = _this$state$whs.wh,
          cw = _this$state$whs.cw,
          ch = _this$state$whs.ch,
          scrollXTop = _this$state$whs.scrollXTop,
          scrollYTop = _this$state$whs.scrollYTop;
      var _scrollXTop = 0;
      var _scrollYTop = 0;
      var top = scrollYTop + deltaY;
      var left = scrollXTop + deltaX;

      if (top < 0) {
        _scrollYTop = 0;
      } else if (top >= ch - wh) {
        _scrollYTop = ch - wh;
      } else {
        _scrollYTop = top;
      }

      if (left < 0) {
        _scrollXTop = 0;
      } else if (left >= cw - ww) {
        _scrollXTop = cw - ww;
      } else {
        _scrollXTop = left;
      }

      this.setState({
        whs: _objectSpread(_objectSpread({}, this.state.whs), {}, {
          scrollXTop: _scrollXTop,
          scrollYTop: _scrollYTop
        })
      });
    }
  }, {
    key: "onScrollMouseDown",
    value: function onScrollMouseDown(e, dir) {
      var _this3 = this;

      this.setState({
        isScrollMouseDown: true
      });
      e.preventDefault();
      var startPosX = e.clientX;
      var startPosY = e.clientY;
      var _this$state$whs2 = this.state.whs,
          cw = _this$state$whs2.cw,
          ww = _this$state$whs2.ww,
          ch = _this$state$whs2.ch,
          wh = _this$state$whs2.wh;

      var _this = this;

      window.onmousemove = function (ev) {
        console.log(1);
        var left = ev.clientX - startPosX;
        var top = ev.clientY - startPosY;
        startPosX = ev.clientX;
        startPosY = ev.clientY;

        _this.handleWheel({
          deltaX: dir === 'x' ? left * cw / ww : 0,
          deltaY: dir === 'y' ? top * ch / wh : 0,
          preventDefault: function preventDefault() {}
        });
      };

      window.onmouseup = function () {
        window.onmousemove = null;
        window.onmouseup = null;

        _this3.setState({
          isScrollMouseDown: false
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          whs = _this$state.whs,
          isScrollMouseDown = _this$state.isScrollMouseDown;
      var isOverflowX = whs.cw > whs.ww;
      var isOverflowY = whs.ch > whs.wh; // 滚动滑块的大小

      var barXStyle = {
        width: Math.pow(whs.ww - 4, 2) / whs.cw,
        transform: "translateX(".concat(whs.scrollXTop * whs.ww / whs.cw, "px)")
      };
      var barYStyle = {
        height: Math.pow(whs.wh - 4, 2) / whs.ch,
        transform: "translateY(".concat(whs.scrollYTop * whs.wh / whs.ch, "px)")
      };
      var containerStyle = {
        transform: "translate(-".concat(whs.scrollXTop, "px, -").concat(whs.scrollYTop, "px)")
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "scroll-wrap".concat(isScrollMouseDown ? ' is-scroll-mouseDown' : ''),
        id: "scroll-wrap"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "scroll-container",
        id: "scroll-container",
        style: containerStyle
      }, this.props.children), isOverflowX && /*#__PURE__*/_react["default"].createElement("div", {
        className: "scroll-bar-wrap scroll-bar-x-wrap"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: barXStyle,
        className: "scroll-bar",
        onMouseDown: function onMouseDown(e) {
          return _this4.onScrollMouseDown(e, 'x');
        }
      }, "bar")), isOverflowY && /*#__PURE__*/_react["default"].createElement("div", {
        className: "scroll-bar-wrap scroll-bar-y-wrap"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        style: barYStyle,
        className: "scroll-bar",
        onMouseDown: function onMouseDown(e) {
          return _this4.onScrollMouseDown(e, 'y');
        }
      }, "bar")));
    }
  }]);

  return Scroll;
}(_react.Component);

exports["default"] = Scroll;

function toNumber(str) {
  return typeof str === 'string' ? parseInt(str, 0) || 0 : str;
}