"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["case", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Switch(_ref) {
  var expression = _ref.expression,
      children = _ref.children;

  var _children = Object.prototype.toString.call(children) === '[object Array]' ? children : [children];

  var child = _children.filter(function (i) {
    var _i$props;

    return ((_i$props = i.props) === null || _i$props === void 0 ? void 0 : _i$props["case"]) === expression;
  });

  var _child = child.length === 0 ? _children.filter(function (i) {
    var _i$props2, _i$props3;

    return ((_i$props2 = i.props) === null || _i$props2 === void 0 ? void 0 : _i$props2["default"]) && ((_i$props3 = i.props) === null || _i$props3 === void 0 ? void 0 : _i$props3["case"]) === undefined;
  }) : child;

  return _child.map(function (item, index) {
    var type = item.type,
        props = item.props;

    var _ = props["case"],
        __children = props.children,
        others = _objectWithoutProperties(props, _excluded);

    return /*#__PURE__*/_react["default"].createElement(type, _objectSpread({
      key: index
    }, others), __children);
  });
}

var _default = Switch;
exports["default"] = _default;