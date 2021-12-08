"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@alifd/next/lib/button/style");

var _button = _interopRequireDefault(require("@alifd/next/lib/button"));

require("@alifd/next/lib/balloon/style");

var _balloon = _interopRequireDefault(require("@alifd/next/lib/balloon"));

require("@alifd/next/lib/icon/style");

var _icon = _interopRequireDefault(require("@alifd/next/lib/icon"));

require("@alifd/next/lib/field/style");

var _field = _interopRequireDefault(require("@alifd/next/lib/field"));

require("@alifd/next/lib/switch/style");

var _switch = _interopRequireDefault(require("@alifd/next/lib/switch"));

require("@alifd/next/lib/number-picker/style");

var _numberPicker = _interopRequireDefault(require("@alifd/next/lib/number-picker"));

require("@alifd/next/lib/checkbox/style");

var _checkbox = _interopRequireDefault(require("@alifd/next/lib/checkbox"));

require("@alifd/next/lib/select/style");

var _select = _interopRequireDefault(require("@alifd/next/lib/select"));

require("@alifd/next/lib/input/style");

var _input = _interopRequireDefault(require("@alifd/next/lib/input"));

require("@alifd/next/lib/radio/style");

var _radio = _interopRequireDefault(require("@alifd/next/lib/radio"));

require("@alifd/next/lib/form/style");

var _form = _interopRequireDefault(require("@alifd/next/lib/form"));

var _react = _interopRequireDefault(require("react"));

var _excluded = ["name", "title", "tips", "required", "component", "help", "pattern", "patternMessage", "validator", "disabled", "hidden"],
    _excluded2 = ["children", "onClick"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FormItem = _form["default"].Item;
var RadioGroup = _radio["default"].Group;
var _formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
};

var empty = function empty() {};

var components = {
  Input: _input["default"],
  Select: _select["default"],
  Radio: RadioGroup,
  'Input.Password': _input["default"].Password,
  Checkbox: _checkbox["default"],
  NumberPicker: _numberPicker["default"],
  Switch: _switch["default"]
};

var FieldForm = /*#__PURE__*/function (_React$Component) {
  _inherits(FieldForm, _React$Component);

  var _super = _createSuper(FieldForm);

  function FieldForm(_props) {
    var _props$node;

    var _this;

    _classCallCheck(this, FieldForm);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "field", new _field["default"](_assertThisInitialized(_this), {
      // onChange: (name, value) => {
      // 	const values = this.field.getValues();
      // 	this.props.node.setValues(values)
      // 	const errors = this.field.getErrors();
      // 	console.log(errors)
      // 	this.props.node.setErrors(errors)
      // },
      values: _this.props.node.getValues()
    }));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (name, v) {
      _this.field.setValue(name, v);

      var values = _this.field.getValues();

      var errors = _this.field.getErrors();

      _this.state.node.setAttributes({
        values: values,
        errors: errors
      }); // console.log({values, errors})

    });

    _defineProperty(_assertThisInitialized(_this), "renderLabel", function (props) {
      var tips = props.tips,
          title = props.title;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'inline-flex'
        }
      }, /*#__PURE__*/_react["default"].createElement("p", null, title), tips && /*#__PURE__*/_react["default"].createElement(_balloon["default"], {
        trigger: /*#__PURE__*/_react["default"].createElement(_icon["default"], {
          size: "small",
          type: "help"
        }),
        closable: false
      }, tips));
    });

    _defineProperty(_assertThisInitialized(_this), "renderFormItem", function () {
      var propsConfig = _this.state.propsConfig;
      var getValues = _this.field.getValues;
      return propsConfig.map(function (props, index) {
        var name = props.name,
            title = props.title,
            tips = props.tips,
            required = props.required,
            component = props.component,
            help = props.help,
            pattern = props.pattern,
            patternMessage = props.patternMessage,
            validator = props.validator,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$hidden = props.hidden,
            hidden = _props$hidden === void 0 ? false : _props$hidden,
            options = _objectWithoutProperties(props, _excluded); // 组件id或自定义组件


        var Com = typeof component === 'string' ? components[component] : component; // 空值提示

        var requiredMessage = required ? "".concat(title, " \u662F\u5FC5\u586B\u5B57\u6BB5") : null; // 自定义校验函数或正则

        var _validator = null;

        if (validator) {
          _validator = validator.bind(_assertThisInitialized(_this), _this.field, props);
        } else if (pattern) {
          _validator = function _validator(rule, value, callback) {
            if (!value && !required) callback();
            return pattern.test(value) ? callback() : callback(patternMessage || "".concat(title, " \u683C\u5F0F\u9519\u8BEF"));
          };
        }

        var values = getValues(); // 禁用

        var _disabled = disabled instanceof Function ? disabled(values, _this.field) : !!disabled; // 隐藏


        var _hidden = hidden instanceof Function ? hidden(values, _this.field) : !!hidden;

        if (_hidden) return null; // label

        var _label = _this.renderLabel(props);

        return /*#__PURE__*/_react["default"].createElement(FormItem, {
          label: _label,
          required: required,
          requiredMessage: requiredMessage,
          key: index,
          fullWidth: true,
          validator: _validator
        }, /*#__PURE__*/_react["default"].createElement(Com, _extends({
          name: name,
          disabled: _disabled
        }, options, {
          onChange: function onChange(v) {
            return _this.onChange(name, v);
          }
        })), help && /*#__PURE__*/_react["default"].createElement("p", null, help));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFooter", function () {
      var _this$props = _this.props,
          _this$props$footer = _this$props.footer,
          footer = _this$props$footer === void 0 ? {} : _this$props$footer,
          _this$props$onSubmit = _this$props.onSubmit,
          onSubmit = _this$props$onSubmit === void 0 ? empty : _this$props$onSubmit,
          _this$props$onReset = _this$props.onReset,
          onReset = _this$props$onReset === void 0 ? empty : _this$props$onReset;
      if (footer === false) return null;
      var actions = footer.actions || ['ok', 'reset'];
      var align = footer.align || 'left';
      var before = footer.before || [];
      var after = footer.after || [];
      var buttons = {
        ok: /*#__PURE__*/_react["default"].createElement(_form["default"].Submit, {
          key: "ok",
          validate: true,
          type: "primary",
          onClick: function onClick(v, e) {
            return onSubmit(v, e);
          }
        }, "\u786E\u5B9A"),
        reset: /*#__PURE__*/_react["default"].createElement(_form["default"].Reset, {
          key: "reset",
          onClick: function onClick() {
            return onReset();
          }
        }, "\u53D6\u6D88")
      };
      return /*#__PURE__*/_react["default"].createElement(FormItem, {
        label: " ",
        style: {
          textAlign: align
        }
      }, _this.footerPushButtons(before), actions.map(function (v) {
        return buttons[v];
      }), _this.footerPushButtons(after));
    });

    _defineProperty(_assertThisInitialized(_this), "footerPushButtons", function (btns) {
      return btns.map(function (btn, index) {
        var children = btn.children,
            _btn$onClick = btn.onClick,
            _onClick = _btn$onClick === void 0 ? empty : _btn$onClick,
            options = _objectWithoutProperties(btn, _excluded2);

        return /*#__PURE__*/_react["default"].createElement(_button["default"], _extends({
          key: index,
          onClick: function onClick() {
            return _onClick(_this.field);
          }
        }, options), children);
      });
    });

    _this.state = {
      node: _props.node,
      propsConfig: (_props === null || _props === void 0 ? void 0 : (_props$node = _props.node) === null || _props$node === void 0 ? void 0 : _props$node.initProps) || []
    };
    return _this;
  }

  _createClass(FieldForm, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// const node = this.state.node;
      // this.field.validate((errors, values) => {
      // 	node.setAttributes({values, errors})
      // });
    }
  }, {
    key: "render",
    value: function render() {
      var field = this.field,
          props = this.props;
      var labelAlign = props.labelAlign,
          node = props.node,
          style = props.style,
          isPreview = props.isPreview,
          _props$formItemLayout = props.formItemLayout,
          formItemLayout = _props$formItemLayout === void 0 ? _formItemLayout : _props$formItemLayout;
      return /*#__PURE__*/_react["default"].createElement(_form["default"], _extends({
        field: field,
        style: style,
        labelAlign: labelAlign,
        isPreview: isPreview
      }, formItemLayout), this.renderFormItem(), this.renderFooter());
    }
  }]);

  return FieldForm;
}(_react["default"].Component);

exports["default"] = FieldForm;