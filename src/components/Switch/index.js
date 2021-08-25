import React from 'react';

function Switch({ expression, children }) {
  children = Object.prototype.toString.call(children) === '[object Array]' ? children : [children];
  const child = children.find((i) => i?.props?.case === expression);
  if (child) {
    const { type, props } = child;
    const { case: _case, children, ...others } = props;
    return React.createElement(type, others, children);
  } else {
    return null;
  }
}

export default Switch;
