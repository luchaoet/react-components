"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ternaryOperator = ternaryOperator;

var _baseUtils = require("@luchao/base-utils");

function ternaryOperator(condition, value, defaultValue) {
  var c = (0, _baseUtils.type)(condition) === 'array' ? condition : [condition]; // 默认值首先使用传入的值，否则根据value值去判断

  var d = 2 in arguments ? defaultValue : {
    "boolean": true,
    number: 0,
    string: '',
    "function": _baseUtils.empty,
    array: [],
    date: new Date(),
    regexp: /^/,
    object: {},
    error: new Error(),
    undefined: undefined,
    "null": null
  }[(0, _baseUtils.type)(value)];
  return c.every(function (v) {
    return !!v;
  }) ? value : d;
}