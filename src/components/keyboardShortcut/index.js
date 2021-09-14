import React from 'react';
import { compact } from 'lodash';
import ReactDOM from 'react-dom';

/**
 *
 * desc 装饰器参数
 * WrappedComponent ReactComponent
 */
const keyboardShortcut = (desc) => {
  return (WrappedComponent) => {
    return class extends React.Component {
      contextmenuFuns = [
        'contextmenu',
        'contextmenuOutside',
        'onceContextmenuOutside',
      ];
      eventTarget = null;
      constructor(props) {
        super(props);
        this.cut = this.cut.bind(this);
        this.copy = this.copy.bind(this);
        this.paste = this.paste.bind(this);
        this.onclick = this.onclick.bind(this);
        this.onkeydown = this.onkeydown.bind(this);
        this.contextmenu = this.contextmenu.bind(this);
        this.copypastecut = this.copypastecut.bind(this);

        this.onceClickOutsideSign = true;
        this.onceContextmenuOutsideSign = true;
        this.state = {};
      }

      get params() {
        return Object.prototype.toString.call(desc) === '[object Object]'
          ? desc
          : {};
      }

      findFunction = (name) => {
        if (this?.__wrappedInstance?.onkeydown) {
          const funs = this.__wrappedInstance.onkeydown() || {};
					const empty = () => {};
          return name ? funs[name] || empty : funs;
        } else {
          return {};
        }
      };

      componentDidMount() {
        const funs = this.findFunction();
        const keys = Object.keys(funs);

        const hasCopy = keys.includes('copy');
        if (hasCopy) document.addEventListener('copy', this.copypastecut, true);

        const hasPaste = keys.includes('paste');
        if (hasPaste)
          document.addEventListener('paste', this.copypastecut, true);

        const hasCut = keys.includes('cut');
        if (hasCut) document.addEventListener('cut', this.copypastecut, true);

        const hasContextmenu = keys.some(
          (item) => this.contextmenuFuns.indexOf(item) >= 0
        );
        if (hasContextmenu)
          document.addEventListener('contextmenu', this.contextmenu, false);

        document.addEventListener('keydown', this.onkeydown, true);
        document.addEventListener('click', this.onclick, false);
        document.addEventListener('mouseover', this.mouseover, false);
      }
			componentWillMount() {
        const funs = this.findFunction();
        const keys = Object.keys(funs);

        const hasCopy = keys.includes('copy');
        if (hasCopy)
          document.removeEventListener('copy', this.copypastecut, true);

        const hasPaste = keys.includes('paste');
        if (hasPaste)
          document.removeEventListener('paste', this.copypastecut, true);

        const hasCut = keys.includes('cut');
        if (hasCut)
          document.removeEventListener('cut', this.copypastecut, true);

        const hasContextmenu = keys.some(
          (item) => this.contextmenuFuns.indexOf(item) >= 0
        );
        if (hasContextmenu)
          document.removeEventListener('contextmenu', this.contextmenu, false);

        document.removeEventListener('click', this.onclick, false);
        document.removeEventListener('keydown', this.onkeydown, true);
        document.removeEventListener('mouseover', this.mouseover, false);
      }

      mouseover = (e) => {
        this.eventTarget = e?.target;
      };

      contextmenu(e) {
        const target = e?.target;
        const wrapDom = ReactDOM.findDOMNode(this.__wrappedInstance);
        const { contextmenu, contextmenuOutside, onceContextmenuOutside } =
          this.findFunction();
        if (wrapDom.contains(target)) {
          // 鼠标右键
          if (contextmenu) contextmenu(e);
          if (onceContextmenuOutside) this.onceContextmenuOutsideSign = true;
        } else {
          if (contextmenuOutside) contextmenuOutside(e);
          if (onceContextmenuOutside && this.onceContextmenuOutsideSign) {
            this.onceContextmenuOutsideSign = false;
            onceContextmenuOutside(e);
          }
        }
      }

      onclick(e) {
        // 处理clickOutside事件
        // 装饰器包裹的组件dom
        const wrapDom = ReactDOM.findDOMNode(this.__wrappedInstance);
        const { click, clickOutside, onceClickOutside } = this.findFunction();

        if (wrapDom.contains(e?.target)) {
          if (click) click(e);
          if (onceClickOutside) this.onceClickOutsideSign = true;
        } else {
          if (clickOutside) clickOutside(e);
          if (onceClickOutside && this.onceClickOutsideSign) {
            this.onceClickOutsideSign = false;
            onceClickOutside(e);
          }
        }
      }
      copypastecut(e) {
        const { type } = e || {};
        const wrapDom = ReactDOM.findDOMNode(this.__wrappedInstance);
        if (!wrapDom.contains(this.eventTarget)) return;
        this[type](e);
      }

      copy(e) {
        // 存在选中内容，默认复制内容
        const str = window.getSelection().toString();
        if (str) return;
        const fun = this.findFunction('copy');
        fun(e);
        // 复制节点 清空剪贴板内容
        e.clipboardData.setData('text', '');
      }
      paste(e) {
        // 剪贴板存在内容 默认粘贴内容
        const str = e.clipboardData.getData('Text');
        if (str) return;
        const fun = this.findFunction('paste');
        fun(e);
      }
      cut(e) {
        // 存在选中内容，默认剪切内容
        const str = window.getSelection().toString();
        if (str) return;
        const fun = this.findFunction('cut');
        fun(e);
        // 剪切节点 清空剪贴板内容
        e.clipboardData.setData('text', '');
      }

      onkeydown(e) {
        // 装饰器包裹的组件dom
        const wrapDom = ReactDOM.findDOMNode(this.__wrappedInstance);
        if (
          wrapDom &&
          wrapDom.contains(this.eventTarget) &&
          typeof this.__wrappedInstance.onkeydown === 'function'
        ) {
          const funs = this.__wrappedInstance.onkeydown();
          const keys = Object.keys(funs).map((i) => {
            return {
              funcName: i,
              keys: i.toLocaleLowerCase().split('+'),
            };
          });

          const { shiftKey, ctrlKey, key } = e;
          const targetKeys = compact([
            shiftKey && 'shift',
            ctrlKey && 'ctrl',
            `${key}`.toLocaleLowerCase(),
          ]);

          const fun = keys.find((item) => arrayEquals(item.keys, targetKeys));
          if (fun) {
            funs[fun.funcName](e);
          }
        }
      }

      render() {
        const { wrappedRef, ...rest } = this.props;
        return (
          <WrappedComponent
            {...rest}
            ref={(c) => {
              this.__wrappedInstance = c;
              wrappedRef && wrappedRef(c);
            }}
          />
        );
      }
    };
  };
};
export default keyboardShortcut;

function arrayEquals(arr1, arr2) {
  // 存在非数组
  if (!arr1 || !arr2 || !(arr1 instanceof Array) || !(arr2 instanceof Array))
    return false;
  // 长度不同
  if (arr1.length !== arr2.length) return false;

  for (const value of arr1) {
    const index = arr2.findIndex((item) => item === value);
    if (index === -1) return false;
  }
  return true;
}