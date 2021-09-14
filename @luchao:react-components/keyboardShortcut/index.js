"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _excluded = ["wrappedRef"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

/**
 * 
 * desc 装饰器参数
 * WrappedComponent ReactComponent
 */
var keyboardShortcut = function keyboardShortcut(desc) {
  return function (WrappedComponent) {
    return /*#__PURE__*/function (_React$Component) {
      _inherits(_class, _React$Component);

      var _super = _createSuper(_class);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _super.call(this, props);
        _this.onkeydown = _this.onkeydown.bind(_assertThisInitialized(_this));
        _this.onmousemove = _this.onmousemove.bind(_assertThisInitialized(_this));
        _this.state = {
          target: null // 当前鼠标聚焦的元素 点击即为聚焦

        };
        return _this;
      }

      _createClass(_class, [{
        key: "params",
        get: function get() {
          return Object.prototype.toString.call(desc) === "[object Object]" ? desc : {};
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var oncontextmenu = this.params.oncontextmenu; // 禁用鼠标右键

          if (!oncontextmenu) {
            window.oncontextmenu = function () {
              return false;
            };
          } // 键盘事件监听


          document.addEventListener('keydown', this.onkeydown, true);
          document.addEventListener('click', this.onmousemove, true);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          // 移除事件监听
          document.removeEventListener('keydown', this.onkeydown, true);
          document.removeEventListener('click', this.onmousemove, true);
        }
      }, {
        key: "onmousemove",
        value: function onmousemove(e) {
          this.setState({
            target: e === null || e === void 0 ? void 0 : e.target
          });
        }
      }, {
        key: "onkeydown",
        value: function onkeydown(e) {
          // 装饰器包裹的组件dom
          var wrapDom = _reactDom["default"].findDOMNode(this.__wrappedInstance); // 当前鼠标聚焦的元素


          var target = this.state.target;

          if (wrapDom && wrapDom.contains(target) && typeof this.__wrappedInstance.onkeydown === 'function') {
            var funs = this.__wrappedInstance.onkeydown();

            var keys = Object.keys(funs).map(function (i) {
              // 记录用户自定义的快捷键
              // funcName 用于函数调用 
              // keys 用于对比
              return {
                funcName: i,
                keys: i.toLocaleLowerCase().split('+')
              };
            });
            var shiftKey = e.shiftKey,
                ctrlKey = e.ctrlKey,
                key = e.key; // 键盘事件被按下的键

            var targetKeys = (0, _lodash.compact)([shiftKey && 'shift', ctrlKey && 'ctrl', "".concat(key).toLocaleLowerCase()]); // 查找快捷键

            var fun = keys.find(function (item) {
              return arrayEquals(item.keys, targetKeys);
            }); // 函数调用及禁用默认事件

            if (fun) {
              funs[fun.funcName](e);
              e.preventDefault();
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
              wrappedRef = _this$props.wrappedRef,
              rest = _objectWithoutProperties(_this$props, _excluded);

          return /*#__PURE__*/_react["default"].createElement(WrappedComponent, _extends({}, rest, {
            ref: function ref(c) {
              _this2.__wrappedInstance = c;
              wrappedRef && wrappedRef(c);
            }
          }));
        }
      }]);

      return _class;
    }(_react["default"].Component);
  };
};

var _default = keyboardShortcut; // 对比两个数组的值是否相等，忽略顺序

exports["default"] = _default;

function arrayEquals(arr1, arr2) {
  // 存在非数组
  if (!arr1 || !arr2 || !(arr1 instanceof Array) || !(arr2 instanceof Array)) return false; // 长度不同

  if (arr1.length !== arr2.length) return false;

  var _iterator = _createForOfIteratorHelper(arr1),
      _step;

  try {
    var _loop = function _loop() {
      var value = _step.value;
      var index = arr2.findIndex(function (item) {
        return item === value;
      });
      if (index === -1) return {
        v: false
      };
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();

      if (_typeof(_ret) === "object") return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
}