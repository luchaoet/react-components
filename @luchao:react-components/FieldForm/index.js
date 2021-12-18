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

require("@alifd/next/lib/cascader-select/style");

var _cascaderSelect = _interopRequireDefault(require("@alifd/next/lib/cascader-select"));

require("@alifd/next/lib/switch/style");

var _switch = _interopRequireDefault(require("@alifd/next/lib/switch"));

require("@alifd/next/lib/number-picker/style");

var _numberPicker = _interopRequireDefault(require("@alifd/next/lib/number-picker"));

require("@alifd/next/lib/select/style");

var _select = _interopRequireDefault(require("@alifd/next/lib/select"));

require("@alifd/next/lib/input/style");

var _input = _interopRequireDefault(require("@alifd/next/lib/input"));

require("@alifd/next/lib/radio/style");

var _radio = _interopRequireDefault(require("@alifd/next/lib/radio"));

require("@alifd/next/lib/form/style");

var _form = _interopRequireDefault(require("@alifd/next/lib/form"));

var _react = _interopRequireDefault(require("react"));

var _baseUtils = require("@luchao/base-utils");

require("./index.scss");

var _excluded = ["name", "label", "_label", "required", "requiredMessage", "component", "help", "pattern", "patternMessage", "validator", "disabled", "hidden", "dataSource", "optionValue", "optionLabel", "value", "defaultValue", "readOnly"],
    _excluded2 = ["children", "onClick", "loading"],
    _excluded3 = ["okLoading", "labelAlign", "style", "isPreview", "formItemLayout", "propsConfig", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
var components = {
  Input: _input["default"],
  Select: _select["default"],
  Radio: RadioGroup,
  'Input.Password': _input["default"].Password,
  NumberPicker: _numberPicker["default"],
  Switch: _switch["default"],
  'Input.TextArea': _input["default"].TextArea,
  CascaderSelect: _cascaderSelect["default"]
};

var FieldForm = /*#__PURE__*/function (_React$Component) {
  _inherits(FieldForm, _React$Component);

  var _super = _createSuper(FieldForm);

  function FieldForm(_props) {
    var _this;

    _classCallCheck(this, FieldForm);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "field", new _field["default"](_assertThisInitialized(_this), {
      onChange: function onChange(name, value) {
        var _this$props$onChange = _this.props.onChange,
            _onChange = _this$props$onChange === void 0 ? function () {} : _this$props$onChange;

        _onChange(name, value, _this.field);
      }
    }));

    _defineProperty(_assertThisInitialized(_this), "renderLabel", function (props) {
      var tips = props.tips,
          label = props.label;
      return label && /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'inline-flex'
        }
      }, /*#__PURE__*/_react["default"].createElement("p", null, label), tips && /*#__PURE__*/_react["default"].createElement(_balloon["default"], {
        align: "t",
        trigger: /*#__PURE__*/_react["default"].createElement(_icon["default"], {
          size: "small",
          type: "help"
        }),
        closable: false
      }, tips));
    });

    _defineProperty(_assertThisInitialized(_this), "renderHelp", function (helps) {
      var isPreview = _this.props.isPreview;
      if (isPreview || !helps) return null;

      if ((0, _baseUtils.type)(helps) === 'array') {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, helps.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "field-form-help",
            key: index,
            dangerouslySetInnerHTML: {
              __html: item
            }
          });
        }));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "field-form-help",
          dangerouslySetInnerHTML: {
            __html: helps
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderFormItem", function () {
      var _this$props = _this.props,
          _this$props$propsConf = _this$props.propsConfig,
          propsConfig = _this$props$propsConf === void 0 ? [] : _this$props$propsConf,
          isPreview = _this$props.isPreview;
      var getValues = _this.field.getValues;
      return propsConfig.map(function (props, index) {
        var _ref;

        var name = props.name,
            label = props.label,
            _label = props._label,
            required = props.required,
            requiredMessage = props.requiredMessage,
            component = props.component,
            help = props.help,
            pattern = props.pattern,
            patternMessage = props.patternMessage,
            validator = props.validator,
            _props$disabled = props.disabled,
            disabled = _props$disabled === void 0 ? false : _props$disabled,
            _props$hidden = props.hidden,
            hidden = _props$hidden === void 0 ? false : _props$hidden,
            dataSource = props.dataSource,
            _props$optionValue = props.optionValue,
            optionValue = _props$optionValue === void 0 ? 'value' : _props$optionValue,
            _props$optionLabel = props.optionLabel,
            optionLabel = _props$optionLabel === void 0 ? 'label' : _props$optionLabel,
            value = props.value,
            defaultValue = props.defaultValue,
            readOnly = props.readOnly,
            options = _objectWithoutProperties(props, _excluded); // 组件id或自定义组件


        var Com = typeof component === 'string' ? components[component] : component; // 空值提示

        var _requiredMessage = required ? requiredMessage || "".concat(label || _label, " \u662F\u5FC5\u586B\u53C2\u6570") : null; // 自定义校验函数或正则


        var _validator = null;

        if (validator) {
          _validator = validator.bind(_assertThisInitialized(_this), _this.field, props);
        } else if (pattern) {
          _validator = function _validator(r, v, c) {
            // 非必填不校验空值
            if (!v && !required) return c(); // 有值有正则便校验

            return pattern.test(v) ? c() : c(patternMessage || '格式错误');
          };
        }

        var values = getValues(); // 禁用

        var _disabled = disabled instanceof Function ? disabled(values, _this.field) : !!disabled; // 隐藏


        var _hidden = hidden instanceof Function ? hidden(values, _this.field) : !!hidden;

        if (_hidden) return null; // label

        var renderLabel = _this.renderLabel(props); // 处理 dataSource


        var _dataSource = dataSource ? {
          dataSource: dataSource.map(function (v) {
            return _objectSpread(_objectSpread({}, v), {}, {
              value: v[optionValue],
              label: v[optionLabel]
            });
          })
        } : {}; // 值处理 不允许 null 


        var _defaultValue = (_ref = value !== null && value !== void 0 ? value : defaultValue) !== null && _ref !== void 0 ? _ref : undefined;

        return /*#__PURE__*/_react["default"].createElement(FormItem, {
          label: renderLabel,
          required: required && !isPreview,
          requiredMessage: _requiredMessage,
          key: index,
          fullWidth: true,
          validator: _validator // size={size}
          ,
          className: "field-form-label"
        }, /*#__PURE__*/_react["default"].createElement(Com, _extends({}, _dataSource, options, {
          name: name,
          defaultValue: _defaultValue,
          disabled: _disabled,
          isPreview: isPreview
        })), _this.renderHelp(help));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFooter", function () {
      var _footer$ok, _footer$okStyle, _footer$cancel, _footer$cancelStyle;

      var _this$props2 = _this.props,
          _this$props2$footer = _this$props2.footer,
          footer = _this$props2$footer === void 0 ? {} : _this$props2$footer,
          _this$props2$onSubmit = _this$props2.onSubmit,
          onSubmit = _this$props2$onSubmit === void 0 ? _baseUtils.empty : _this$props2$onSubmit,
          _this$props2$onReset = _this$props2.onReset,
          onReset = _this$props2$onReset === void 0 ? _baseUtils.empty : _this$props2$onReset,
          okLoading = _this$props2.okLoading,
          labelAlign = _this$props2.labelAlign;
      var submitDisabled = footer.submitDisabled,
          restDisabled = footer.restDisabled;
      if (footer === false) return null;
      var aligin = footer.aligin || 'left';
      var before = footer.before || [];
      var after = footer.after || [];
      var ok = (_footer$ok = footer.ok) !== null && _footer$ok !== void 0 ? _footer$ok : '确定';
      var okStyle = (_footer$okStyle = footer.okStyle) !== null && _footer$okStyle !== void 0 ? _footer$okStyle : {};
      var cancel = (_footer$cancel = footer.cancel) !== null && _footer$cancel !== void 0 ? _footer$cancel : '取消';
      var cancelStyle = (_footer$cancelStyle = footer.cancelStyle) !== null && _footer$cancelStyle !== void 0 ? _footer$cancelStyle : {};
      var size = footer.size;
      var okProps = footer.okProps || {};
      var cancelProps = footer.cancelProps || {};
      var buttons = {
        ok: /*#__PURE__*/_react["default"].createElement(_form["default"].Submit, _extends({
          loading: okLoading,
          disabled: submitDisabled,
          style: okStyle,
          validate: true,
          type: "primary"
        }, okProps, {
          onClick: function onClick(v, e) {
            return onSubmit(v, e);
          }
        }), ok),
        cancel: /*#__PURE__*/_react["default"].createElement(_form["default"].Reset, _extends({
          size: size,
          disabled: restDisabled,
          style: cancelStyle
        }, cancelProps, {
          onClick: onReset
        }), cancel)
      };
      return /*#__PURE__*/_react["default"].createElement(FormItem, {
        label: labelAlign === 'top' ? '' : ' ',
        style: {
          textAlign: aligin
        },
        size: size,
        className: "field-form-buttons"
      }, _this.footerPushButtons(before), ok && buttons.ok, cancel && buttons.cancel, _this.footerPushButtons(after));
    });

    _defineProperty(_assertThisInitialized(_this), "footerPushButtons", function (btns) {
      var _this$props$size = _this.props.size,
          size = _this$props$size === void 0 ? 'medium' : _this$props$size;
      return btns.map(function (btn, index) {
        var children = btn.children,
            _btn$onClick = btn.onClick,
            _onClick = _btn$onClick === void 0 ? _baseUtils.empty : _btn$onClick,
            loading = btn.loading,
            options = _objectWithoutProperties(btn, _excluded2);

        return /*#__PURE__*/_react["default"].createElement(_button["default"], _extends({
          key: index,
          loading: loading,
          onClick: function onClick() {
            return _onClick(_this.field);
          }
        }, options, {
          size: size
        }), children);
      });
    });

    _this.state = {};
    return _this;
  }

  _createClass(FieldForm, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 改写setState方法
      this.setState = function () {
        return false;
      };
    }
  }, {
    key: "render",
    value: function render() {
      var field = this.field,
          props = this.props;

      var okLoading = props.okLoading,
          labelAlign = props.labelAlign,
          style = props.style,
          isPreview = props.isPreview,
          _props$formItemLayout = props.formItemLayout,
          formItemLayout = _props$formItemLayout === void 0 ? _formItemLayout : _props$formItemLayout,
          propsConfig = props.propsConfig,
          _props$size = props.size,
          size = _props$size === void 0 ? 'medium' : _props$size,
          options = _objectWithoutProperties(props, _excluded3);

      return /*#__PURE__*/_react["default"].createElement(_form["default"], _extends({
        field: field,
        style: style,
        labelAlign: labelAlign,
        isPreview: isPreview,
        size: size
      }, formItemLayout, options), this.renderFormItem(), !isPreview && this.renderFooter());
    }
  }]);

  return FieldForm;
}(_react["default"].Component);

exports["default"] = FieldForm;