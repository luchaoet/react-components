import React, { Component } from 'react';
import cx from 'classnames';
import './index.scss';

const directionEnum = {
  ver: 'ver', // 垂直
  hoz: 'hoz', // 水平
};

export default class DraggleLayout extends Component {
  constructor(props) {
    super(props);
    const { direction, min = 50, max = 200 } = props;
    const _direction = directionEnum[direction] || 'ver';
    this.state = {
      aStyle: {
        [_direction === 'ver' ? 'width' : 'height']: max,
      },
      direction: _direction,
    };
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    const { max = 200, defaultValue } = this.props;
    this.setAttribute(defaultValue || max);
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  // 监听屏幕大小变化 根据比例分配大小
  resize() {
    const { direction = 'ver', aStyle, bStyle } = this.state;
    const key = direction === 'hoz' ? 'height' : 'width';
    const area = getComputedStyle(this.refs.draggleLayout, '')[key];
    const _area = this.transformNumber(area);
    const asize = _area * (aStyle[key] / (aStyle[key] + bStyle[key]));
    this.setAttribute(asize);
  }

  transformNumber(value, number = 0) {
    // 100 100.01 -10
    if (/^-?[\d\.]*$/.test(value)) {
      const n = Number(Number(value).toFixed(1));
      return n > 0 ? n : 0;
    }
    // 100px 100.01px
    else if (/^[\d\.]*px$/.test(value)) {
      return parseInt(value);
    }
    // 100% 10.01%
    else if (/^[\d\.]*%$/.test(value)) {
      return number * (parseInt(value) / 100);
    }
    // 100% - 10px
    else if (/^[\w|%| ]*-[ |\w|%]*$/.test(value)) {
      const [a, b] = value.match(/[\w|%]+/g);
      return this.transformNumber(a, number) - this.transformNumber(b, number);
    }
  }

  setAttribute(value) {
    const { direction, min = 50, max = 200 } = this.props;
    const _direction = directionEnum[direction] || 'ver';
    const key = _direction === 'ver' ? 'width' : 'height';
    const area = getComputedStyle(this.refs.draggleLayout, '')[key];
    const _area = this.transformNumber(area);
    const _value = this.transformNumber(value, _area);
    const _min = this.transformNumber(min, _area);
    const _max = this.transformNumber(max, _area);
    let v = this.rangeValue(_value, _min, _max);
    v = Math.abs(v);
    this.setState({
      aStyle: { [key]: v },
      bStyle: { [key]: _area - v },
    });
  }

  //计算是否超出屏幕
  InWindow = (left, top, startPosX, startPosY) => {
    let H = document.body.clientHeight;
    let W = document.body.clientWidth;
    if (
      (left < 20 && startPosX > left) ||
      (left > W - 20 && startPosX < left) ||
      (top < 20 && startPosY > top) ||
      (top > H - 20 && startPosY < top)
    ) {
      return false;
    }
    return true;
  };

  rangeValue(value, min, max) {
    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    } else {
      return value;
    }
  }

  onMouseDown = (e) => {
    e.preventDefault();
    const startPosX = e.clientX;
    const startPosY = e.clientY;
    const that = this;
    const { aStyle, direction } = this.state;
    document.body.onmousemove = (e) => {
      const left = e.clientX - startPosX;
      const top = e.clientY - startPosY;
      if (this.InWindow(e.clientX, e.clientY, startPosX, startPosY)) {
        const size = direction === 'ver' ? aStyle.width + left : aStyle.height + top;
        this.setAttribute(size);
      } else {
        document.body.onmousemove = null;
        document.body.onmouseup = null;
      }
    };
    document.body.onmouseup = () => {
      document.body.onmousemove = null;
      document.body.onmouseup = null;
    };
  };

  handleChildren() {
    const children = this.props.children;
    const _children = {};
    if (Object.prototype.toString.call(children) === '[object Object]') {
      _children[children.type.displayName] = children;
    } else {
      for (const chid of children) {
        _children[chid.type.displayName] = chid;
      }
    }
    return _children;
  }

  setValue(value) {}

  render() {
    const children = this.handleChildren();
    const { className, style } = this.props;
    const { direction, aStyle, bStyle } = this.state;

    const draggleClass = cx('draggle-layout-border', `draggle-layout-border-${direction}`);

    const { className: classNameA, style: styleA, ...othersA } = children.A.props;
    const { className: classNameB, style: styleB, ...othersB } = children.B.props;
    const aClass = cx('draggle-layout-a', classNameA);
    const bClass = cx('draggle-layout-b', classNameB);

    const wrapClass = cx('draggle-layout-wrap', `draggle-layout-wrap-${direction}`, className);
    return (
      <div ref="draggleLayout" style={style} className={wrapClass}>
        <div className={aClass} style={{ ...styleA, ...aStyle }} {...othersA}>
          {children.A}
          <p className={draggleClass} onMouseDown={this.onMouseDown} />
        </div>
        <div className={bClass} style={{ ...styleB, ...bStyle }} {...othersB}>
          {children.B}
        </div>
      </div>
    );
  }
}

['A', 'B'].forEach((item) => {
  DraggleLayout[item] = function ({ children = null }) {
    return children;
  };
  DraggleLayout[item]['displayName'] = item;
});
