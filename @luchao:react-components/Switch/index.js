"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["case", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Switch(_ref) {
  var expression = _ref.expression,
      children = _ref.children;
  children = Object.prototype.toString.call(children) === '[object Array]' ? children : [children];
  var child = children.find(function (i) {
    var _i$props;

    return (i === null || i === void 0 ? void 0 : (_i$props = i.props) === null || _i$props === void 0 ? void 0 : _i$props["case"]) === expression;
  });

  if (child) {
    var type = child.type,
        props = child.props;

    var _ = props["case"],
        _children = props.children,
        others = _objectWithoutProperties(props, _excluded);

    return /*#__PURE__*/_react["default"].createElement(type, others, _children);
  } else {
    return null;
  }
}

var _default = Switch;
exports["default"] = _default;