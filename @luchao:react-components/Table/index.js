"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Table(_ref) {
  var _ref$dataSource = _ref.dataSource,
      dataSource = _ref$dataSource === void 0 ? [] : _ref$dataSource,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("table", {
    cellSpacing: "0",
    style: style,
    className: (0, _classnames["default"])('table-wrapper', className)
  }, /*#__PURE__*/_react["default"].createElement("colgroup", null, /*#__PURE__*/_react["default"].createElement("col", null), /*#__PURE__*/_react["default"].createElement("col", null)), /*#__PURE__*/_react["default"].createElement("thead", {
    className: "table-head-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January")), /*#__PURE__*/_react["default"].createElement("th", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January")))), /*#__PURE__*/_react["default"].createElement("tbody", {
    className: "table-body-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-cell-wrapper"
  }, "January")))));
}

function Column(_ref2) {
  var title = _ref2.title,
      dataIndex = _ref2.dataIndex;
  return 11;
}

Table.Column = Column;
var _default = Table;
exports["default"] = _default;