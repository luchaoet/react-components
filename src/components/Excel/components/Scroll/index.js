import React, { Component } from 'react';
import cx from 'classnames';
import './index.scss';

export default class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  arrow(dir) {
    const className = cx('arrow-wrap', `arrow-${dir}`)
    return (
      <div className={className}>
        {/* <div>11</div> */}
      </div>
    ) 
  }

  render() {
    const { className, direction = 'hoz' } = this.props;
    const _className = cx(
      'scroll-wrap--BIK7GDp',
      `scroll-${direction}`,
      className
    );
    const [btn1, btn2] = direction === 'hoz' ? ['top', 'bottom'] : ['left', 'right'];
    return (
      <div className={_className}>
        <div className="bar-wrap">
          {this.arrow(btn1)}
          <p className={`bar-${direction}`}><span /></p>
          {this.arrow(btn2)}
        </div>
      </div>
    );
  }
}
