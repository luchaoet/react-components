"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.scss");

var _excluded = ["className", "style"],
    _excluded2 = ["className", "style"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var directionEnum = {
  ver: 'ver',
  // 垂直
  hoz: 'hoz' // 水平

};

var DraggleLayout = /*#__PURE__*/function (_Component) {
  _inherits(DraggleLayout, _Component);

  var _super = _createSuper(DraggleLayout);

  function DraggleLayout(props) {
    var _this;

    _classCallCheck(this, DraggleLayout);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "InWindow", function (left, top, startPosX, startPosY) {
      var H = document.body.clientHeight;
      var W = document.body.clientWidth;

      if (left < 20 && startPosX > left || left > W - 20 && startPosX < left || top < 20 && startPosY > top || top > H - 20 && startPosY < top) {
        return false;
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      e.preventDefault();
      var startPosX = e.clientX;
      var startPosY = e.clientY;

      var that = _assertThisInitialized(_this);

      var _this$state = _this.state,
          aStyle = _this$state.aStyle,
          direction = _this$state.direction;

      document.body.onmousemove = function (e) {
        var left = e.clientX - startPosX;
        var top = e.clientY - startPosY;

        if (_this.InWindow(e.clientX, e.clientY, startPosX, startPosY)) {
          var size = direction === 'ver' ? aStyle.width + left : aStyle.height + top;

          _this.setAttribute(size);
        } else {
          document.body.onmousemove = null;
          document.body.onmouseup = null;
        }
      };

      document.body.onmouseup = function () {
        document.body.onmousemove = null;
        document.body.onmouseup = null;
      };
    });

    var _direction2 = props.direction,
        _props$min = props.min,
        min = _props$min === void 0 ? 50 : _props$min,
        _props$max = props.max,
        max = _props$max === void 0 ? 200 : _props$max;

    var _direction = directionEnum[_direction2] || 'ver';

    _this.state = {
      aStyle: _defineProperty({}, _direction === 'ver' ? 'width' : 'height', max),
      direction: _direction
    };
    _this.resize = _this.resize.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DraggleLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          _this$props$max = _this$props.max,
          max = _this$props$max === void 0 ? 200 : _this$props$max,
          defaultValue = _this$props.defaultValue;
      this.setAttribute(defaultValue || max);
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    } // 监听屏幕大小变化 根据比例分配大小

  }, {
    key: "resize",
    value: function resize() {
      var _this$state2 = this.state,
          _this$state2$directio = _this$state2.direction,
          direction = _this$state2$directio === void 0 ? 'ver' : _this$state2$directio,
          aStyle = _this$state2.aStyle,
          bStyle = _this$state2.bStyle;
      var key = direction === 'hoz' ? 'height' : 'width';
      var area = getComputedStyle(this.refs.draggleLayout, '')[key];

      var _area = this.transformNumber(area);

      var asize = _area * (aStyle[key] / (aStyle[key] + bStyle[key]));
      this.setAttribute(asize);
    }
  }, {
    key: "transformNumber",
    value: function transformNumber(value) {
      var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      // 100 100.01 -10
      if (/^-?[\d\.]*$/.test(value)) {
        var n = Number(Number(value).toFixed(1));
        return n > 0 ? n : 0;
      } // 100px 100.01px
      else if (/^[\d\.]*px$/.test(value)) {
        return parseInt(value);
      } // 100% 10.01%
      else if (/^[\d\.]*%$/.test(value)) {
        return number * (parseInt(value) / 100);
      } // 100% - 10px
      else if (/^[\w|%| ]*-[ |\w|%]*$/.test(value)) {
        var _value$match = value.match(/[\w|%]+/g),
            _value$match2 = _slicedToArray(_value$match, 2),
            a = _value$match2[0],
            b = _value$match2[1];

        return this.transformNumber(a, number) - this.transformNumber(b, number);
      }
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(value) {
      var _this$props2 = this.props,
          direction = _this$props2.direction,
          _this$props2$min = _this$props2.min,
          min = _this$props2$min === void 0 ? 50 : _this$props2$min,
          _this$props2$max = _this$props2.max,
          max = _this$props2$max === void 0 ? 200 : _this$props2$max;

      var _direction = directionEnum[direction] || 'ver';

      var key = _direction === 'ver' ? 'width' : 'height';
      var area = getComputedStyle(this.refs.draggleLayout, '')[key];

      var _area = this.transformNumber(area);

      var _value = this.transformNumber(value, _area);

      var _min = this.transformNumber(min, _area);

      var _max = this.transformNumber(max, _area);

      var v = this.rangeValue(_value, _min, _max);
      v = Math.abs(v);
      this.setState({
        aStyle: _defineProperty({}, key, v),
        bStyle: _defineProperty({}, key, _area - v)
      });
    } //计算是否超出屏幕

  }, {
    key: "rangeValue",
    value: function rangeValue(value, min, max) {
      if (value < min) {
        return min;
      } else if (value > max) {
        return max;
      } else {
        return value;
      }
    }
  }, {
    key: "handleChildren",
    value: function handleChildren() {
      var children = this.props.children;
      var _children = {};

      if (Object.prototype.toString.call(children) === '[object Object]') {
        _children[children.type.displayName] = children;
      } else {
        var _iterator = _createForOfIteratorHelper(children),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var chid = _step.value;
            _children[chid.type.displayName] = chid;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return _children;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {}
  }, {
    key: "render",
    value: function render() {
      var children = this.handleChildren();
      var _this$props3 = this.props,
          className = _this$props3.className,
          style = _this$props3.style;
      var _this$state3 = this.state,
          direction = _this$state3.direction,
          aStyle = _this$state3.aStyle,
          bStyle = _this$state3.bStyle;
      var draggleClass = (0, _classnames["default"])('draggle-layout-border', "draggle-layout-border-".concat(direction));

      var _children$A$props = children.A.props,
          classNameA = _children$A$props.className,
          styleA = _children$A$props.style,
          othersA = _objectWithoutProperties(_children$A$props, _excluded);

      var _children$B$props = children.B.props,
          classNameB = _children$B$props.className,
          styleB = _children$B$props.style,
          othersB = _objectWithoutProperties(_children$B$props, _excluded2);

      var aClass = (0, _classnames["default"])('draggle-layout-a', classNameA);
      var bClass = (0, _classnames["default"])('draggle-layout-b', classNameB);
      var wrapClass = (0, _classnames["default"])('draggle-layout-wrap', "draggle-layout-wrap-".concat(direction), className);
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: "draggleLayout",
        style: style,
        className: wrapClass
      }, /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: aClass,
        style: _objectSpread(_objectSpread({}, styleA), aStyle)
      }, othersA), children.A, /*#__PURE__*/_react["default"].createElement("p", {
        className: draggleClass,
        onMouseDown: this.onMouseDown
      })), /*#__PURE__*/_react["default"].createElement("div", _extends({
        className: bClass,
        style: _objectSpread(_objectSpread({}, styleB), bStyle)
      }, othersB), children.B));
    }
  }]);

  return DraggleLayout;
}(_react.Component);

exports["default"] = DraggleLayout;
['A', 'B'].forEach(function (item) {
  DraggleLayout[item] = function (_ref) {
    var _ref$children = _ref.children,
        children = _ref$children === void 0 ? null : _ref$children;
    return children;
  };

  DraggleLayout[item]['displayName'] = item;
});