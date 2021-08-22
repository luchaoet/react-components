import React, { Component } from 'react';
import './index.scss';

interface State {
  whs: {
    ww: number;
    wh: number;
    cw: number;
    ch: number;
    scrollXTop: number;
    scrollYTop: number;
  };
  isScrollMouseDown: Boolean;
  wrap: any;
  container: any;
}

const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

export default class Scroll extends Component {
  wrap = React.createRef();
  container = React.createRef();
  state: State;
  constructor(props: Object) {
    super(props);
    this.handleWheel = this.handleWheel.bind(this);
    this.init = this.init.bind(this);
    this.state = {
      wrap: null,
      container: null,
      whs: { ww: 0, wh: 0, cw: 0, ch: 0, scrollXTop: 0, scrollYTop: 0 },
      isScrollMouseDown: false
    }
  }
  componentDidMount() {
    this.init();
    window.addEventListener('resize', this.init);
    const wrapDom = document.getElementById('scroll-wrap');
    wrapDom?.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', this.handleWheel);
  }
  componentWillUnmount() {
    this.setState = () => {};
    window.removeEventListener('resize', this.init);
    const wrapDom = document.getElementById('scroll-wrap');
    wrapDom?.removeEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', this.handleWheel);
  }
  init() {
    const wrapDom = document.getElementById('scroll-wrap');
    const containerDom = document.getElementById('scroll-container');
    if (!wrapDom || !containerDom) return;
    const { width: ww, height: wh } = getComputedStyle(wrapDom, '');
    const { width: cw, height: ch } = getComputedStyle(containerDom, '');
    this.setState({
      whs: {
        ...this.state.whs,
        ww: toNumber(ww), 
        wh: toNumber(wh), 
        cw: toNumber(cw), 
        ch: toNumber(ch)
      }
    })
  }
  handleWheel(e) {
    e?.preventDefault();
    const { deltaX, deltaY } = e;
    const { ww, wh, cw, ch, scrollXTop, scrollYTop } = this.state.whs;
    let _scrollXTop = 0;
    let _scrollYTop = 0;
    const top = scrollYTop + deltaY;
    const left = scrollXTop + deltaX;
    if (top < 0) {
      _scrollYTop = 0;
    } else if (top >= ch - wh) {
      _scrollYTop = ch - wh;
    } else {
      _scrollYTop = top;
    }
    if (left < 0) {
      _scrollXTop = 0;
    } else if (left >= cw - ww) {
      _scrollXTop = cw - ww;
    } else {
      _scrollXTop = left;
    }
    this.setState({
      whs: {
        ...this.state.whs,
        scrollXTop: _scrollXTop,
        scrollYTop: _scrollYTop,
      }
    });
  }
  onScrollMouseDown(e, dir) {
    this.setState({ isScrollMouseDown: true });
    e.preventDefault();
    let startPosX = e.clientX;
    let startPosY = e.clientY;
    const { cw, ww, ch, wh } = this.state.whs;
    const _this = this;
    window.onmousemove = (ev) => {
      console.log(1)
      const left = ev.clientX - startPosX;
      const top = ev.clientY - startPosY;
      startPosX = ev.clientX;
      startPosY = ev.clientY;
      _this.handleWheel({
        deltaX: dir === 'x' ? (left * cw) / ww : 0, 
        deltaY: dir === 'y' ? (top * ch) / wh : 0,
        preventDefault: () => {}
      })
    };
    window.onmouseup = () => {
      window.onmousemove = null;
      window.onmouseup = null;
      this.setState({ isScrollMouseDown: false });
    };
  }
  render() {
    const { whs, isScrollMouseDown } = this.state;
    const isOverflowX = whs.cw > whs.ww;
    const isOverflowY = whs.ch > whs.wh;
    // 滚动滑块的大小
    const barXStyle = {
      width: Math.pow(whs.ww - 4, 2) / (whs.cw),
      transform: `translateX(${whs.scrollXTop * whs.ww / whs.cw}px)`,
    };
    const barYStyle = {
      height: Math.pow(whs.wh - 4, 2) / (whs.ch),
      transform: `translateY(${whs.scrollYTop * whs.wh / whs.ch}px)`,
    };
    const containerStyle = {
      transform: `translate(-${whs.scrollXTop}px, -${whs.scrollYTop}px)`,
    };
    return (
      <div className={`scroll-wrap${isScrollMouseDown ? ' is-scroll-mouseDown' : ''}`} id="scroll-wrap">
        <div className="scroll-container" id="scroll-container" style={containerStyle}>{this.props.children}</div>
        {
          isOverflowX &&
          <div className="scroll-bar-wrap scroll-bar-x-wrap">
            <span 
              style={barXStyle} 
              className="scroll-bar"
              onMouseDown={e => this.onScrollMouseDown(e, 'x')}
            >bar</span>
          </div>
        }
        {
          isOverflowY &&
          <div className="scroll-bar-wrap scroll-bar-y-wrap">
            <span 
              style={barYStyle} 
              className="scroll-bar"
              onMouseDown={e => this.onScrollMouseDown(e, 'y')}
            >bar</span>
          </div>
        }
      </div>
    )
  }
}

function toNumber(str: string | number): number {
  return typeof str === 'string' ? (parseInt(str, 0) || 0) : str;
}