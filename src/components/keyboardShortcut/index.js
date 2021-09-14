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
			constructor(props) {
				super(props);
				this.onkeydown = this.onkeydown.bind(this);
				this.onmousemove = this.onmousemove.bind(this);
				this.state = {
					target: null, // 当前鼠标聚焦的元素 点击即为聚焦
				}
			}

			get params() {
				return Object.prototype.toString.call(desc) === "[object Object]" ? desc : {};
			}
	
			componentDidMount() {
				const { oncontextmenu } = this.params;
				// 禁用鼠标右键
				if(!oncontextmenu) {
					window.oncontextmenu = () => false;
				} 
				// 键盘事件监听
				document.addEventListener('keydown', this.onkeydown, true);
				document.addEventListener('click', this.onmousemove, true);
			}
	
			componentWillUnmount() {
				// 移除事件监听
				document.removeEventListener('keydown', this.onkeydown, true);
				document.removeEventListener('click', this.onmousemove, true);
	
			}
	
			onmousemove(e) {
				this.setState({
					target: e?.target
				})
			}
	
			onkeydown(e) {
				// 装饰器包裹的组件dom
				const wrapDom = ReactDOM.findDOMNode(this.__wrappedInstance);
				// 当前鼠标聚焦的元素
				const { target } = this.state;
				if (
					wrapDom &&
					wrapDom.contains(target) &&
					typeof this.__wrappedInstance.onkeydown === 'function'
				) {
					const funs = this.__wrappedInstance.onkeydown();
					const keys = Object.keys(funs).map((i) => {
						// 记录用户自定义的快捷键
						// funcName 用于函数调用 
						// keys 用于对比
						return {
							funcName: i,
							keys: i.toLocaleLowerCase().split('+'),
						};
					});
					const { shiftKey, ctrlKey, key } = e;
					// 键盘事件被按下的键
					const targetKeys = compact([
						shiftKey && 'shift',
						ctrlKey && 'ctrl',
						`${key}`.toLocaleLowerCase(),
					]);
					// 查找快捷键
					const fun = keys.find((item) => arrayEquals(item.keys, targetKeys));
					// 函数调用及禁用默认事件
					if (fun) {
						funs[fun.funcName](e);
						e.preventDefault();
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
	}
};
export default keyboardShortcut;

// 对比两个数组的值是否相等，忽略顺序
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