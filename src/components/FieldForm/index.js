import React from 'react';
import {
  Form,
  Input,
  Radio,
  Field,
  Button,
  Select,
  NumberPicker,
  Switch,
  Balloon,
  Icon,
  CascaderSelect,
} from '@alifd/next';
import { type, empty } from '@luchao/base-utils';

import './index.scss';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const _formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const components = {
  Input,
  Select,
  Radio: RadioGroup,
  'Input.Password': Input.Password,
  NumberPicker,
  Switch,
  'Input.TextArea': Input.TextArea,
  CascaderSelect
};

export default class FieldForm extends React.Component {
  field = new Field(this, {
    onChange: (name, value) => {
      const { onChange: _onChange = () => {} } = this.props;
      _onChange(name, value, this.field);
    }
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    // 改写setState方法
    this.setState = () => false;
  }

  renderLabel = (props) => {
    const { tips, label } = props;
    return label && (
      <div
        style={{
          display: 'inline-flex',
        }}
      >
        <p>{label}</p>
        {tips && (
          <Balloon
            align="t"
            trigger={<Icon size="small" type="help" />}
            closable={false}
          >
            {tips}
          </Balloon>
        )}
      </div>
    );
  };

  renderHelp = (helps) => {
    const { isPreview } = this.props;
    if (isPreview || !helps) return null;
    if (type(helps) === 'array') {
      return (
        <>
          {
            helps.map((item, index) => <div className="field-form-help" key={index} dangerouslySetInnerHTML={{__html: item}} />)
          }
        </>
      );
    } else {
      return <div className="field-form-help" dangerouslySetInnerHTML={{__html: helps}} />;
    }
  }


  renderFormItem = () => {
    const { propsConfig = [], isPreview } = this.props;
    const { getValues } = this.field;
    return propsConfig.map((props, index) => {
      const { 
        name, label, _label, required, requiredMessage, component, help,
        pattern, patternMessage, validator, 
        disabled = false, 
        hidden = false,
        dataSource, optionValue = 'value', optionLabel = 'label',
        value, defaultValue, readOnly,
        ...options 
      } = props;
      // 组件id或自定义组件
      const Com = typeof component === 'string' ? components[component] : component;
      // 空值提示
      const _requiredMessage = required ? (requiredMessage || `${label || _label} 是必填参数`) : null;

      // 自定义校验函数或正则
      let _validator = null;
      if (validator) {
        _validator = validator.bind(this, this.field, props);
      } else if (pattern) {
        _validator = (r, v, c) => {
          // 非必填不校验空值
          if (!v && !required) return c();
          // 有值有正则便校验
          return pattern.test(v) ? c() : c(patternMessage || '格式错误');
        };
      }

      const values = getValues();
      // 禁用
      const _disabled = disabled instanceof Function ? disabled(values, this.field) : !!disabled;
      // 隐藏
      const _hidden = hidden instanceof Function ? hidden(values, this.field) : !!hidden;
      if (_hidden) return null;
      // label
      const renderLabel = this.renderLabel(props);
      // 处理 dataSource
      const _dataSource = dataSource
        ? {
          dataSource: dataSource.map((v) => {
            return {
              ...v,
              value: v[optionValue],
              label: v[optionLabel]
            };
          })
        } 
        : {};
      // 值处理 不允许 null 
      const _defaultValue = value ?? defaultValue ?? undefined;

      return (
        <FormItem
          label={renderLabel}
          required={required && !isPreview}
          requiredMessage={_requiredMessage}
          key={index}
          fullWidth
          validator={_validator}
          // size={size}
          className="field-form-label"
        >
          <Com 
            {..._dataSource} 
            {...options} 
            name={name}
            defaultValue={_defaultValue}
            disabled={_disabled} 
            isPreview={isPreview}
          />
          {this.renderHelp(help)}
        </FormItem>
      );
    });
  }

  renderFooter = () => {
    const {
      footer = {},
      onSubmit = empty,
      onReset = empty,
      okLoading,
      labelAlign
    } = this.props;
    const { submitDisabled, restDisabled } = footer;
    if (footer === false) return null;
    const aligin = footer.aligin || 'left';
    const before = footer.before || [];
    const after = footer.after || [];
    const ok = footer.ok ?? '确定';
    const okStyle = footer.okStyle ?? {};
    const cancel = footer.cancel ?? '取消';
    const cancelStyle = footer.cancelStyle ?? {};
    const {size} = footer;
    const okProps = footer.okProps || {};
    const cancelProps = footer.cancelProps || {};
    const buttons = {
      ok: (
        <Form.Submit
          loading={okLoading}
          disabled={submitDisabled}
          style={okStyle}
          validate
          type="primary"
          {...okProps}
          onClick={(v, e) => onSubmit(v, e)}
        >
          {ok}
        </Form.Submit>
      ),
      cancel: (
        <Form.Reset size={size} disabled={restDisabled} style={cancelStyle} {...cancelProps} onClick={onReset}>
          {cancel}
        </Form.Reset>
      ),
    };

    return (
      <FormItem label={labelAlign === 'top' ? '' : ' '} style={{ textAlign: aligin }} size={size} className="field-form-buttons">
        {this.footerPushButtons(before)}
        {ok && buttons.ok}
        {cancel && buttons.cancel}
        {this.footerPushButtons(after)}
      </FormItem>
    );
  };

  footerPushButtons = (btns) => {
    const {size = 'medium'} = this.props;
    return btns.map((btn, index) => {
      const { children, onClick = empty, loading, ...options } = btn;
      return (
        <Button
          key={index}
          loading={loading}
          onClick={() => onClick(this.field)}
          {...options}
          size={size}
        >
          {children}
        </Button>
      );
    });
  };

  render() {
    const { field, props } = this;
    const {
      okLoading,
      labelAlign,
      style,
      isPreview,
      formItemLayout = _formItemLayout,
      propsConfig,
      size = 'medium', 
      ...options
    } = props;
    return (
      <Form
        field={field}
        style={style}
        labelAlign={labelAlign}
        isPreview={isPreview}
        size={size}
        {...formItemLayout}
        {...options}
      >
        {this.renderFormItem()}
        {!isPreview && this.renderFooter()}
      </Form>
    );
  }
}