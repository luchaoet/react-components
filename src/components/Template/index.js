import React, { createElement } from 'react';

export default class Template extends React.Component {
  render() {
    const { component = 'div', show = true, children, ...others} = this.props;
    const el = !!show && createElement(
      component,
      others,
      children
    );
    return el;
  }
} 