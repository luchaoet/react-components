"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MapDom(_ref) {
  var _ref$parentDom = _ref.parentDom,
      parentDom = _ref$parentDom === void 0 ? function (c) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, c);
  } : _ref$parentDom,
      _ref$dataSource = _ref.dataSource,
      dataSource = _ref$dataSource === void 0 ? [] : _ref$dataSource,
      _ref$render = _ref.render,
      render = _ref$render === void 0 ? function () {
    return null;
  } : _ref$render;
  var c = dataSource.map(function (item, index) {
    return render(item, index);
  });
  return parentDom(c);
}

var _default = MapDom;
exports["default"] = _default;