import React from 'react';

function Switch({ expression, children }) {
  const _children = Object.prototype.toString.call(children) === '[object Array]' ? children : [children];
  const child = _children.filter((i) => i.props?.case === expression);
  const _child = child.length === 0 ? _children.filter((i) => i.props?.default && i.props?.case === undefined) : child;
  return _child.map((item, index) => {
    const { type, props } = item;
    const { case: _, children: __children, ...others } = props;
    return React.createElement(type, {key: index, ...others}, __children)
  })
}

export default Switch;