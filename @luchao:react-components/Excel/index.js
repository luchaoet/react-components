"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tools = require("./tools");

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var Scroll = /*#__PURE__*/function (_Component) {
  _inherits(Scroll, _Component);

  var _super = _createSuper(Scroll);

  function Scroll(props) {
    var _this;

    _classCallCheck(this, Scroll);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "ratio", window.devicePixelRatio || 1);

    _defineProperty(_assertThisInitialized(_this), "defaultConfig", {
      cellWidth: 80,
      cellHeight: 25,
      colHeight: 25,
      rowWidth: 25
    });

    _defineProperty(_assertThisInitialized(_this), "standard", {});

    _defineProperty(_assertThisInitialized(_this), "handleMousemove", function (e) {
      console.log(_this.position(e));
    });

    _defineProperty(_assertThisInitialized(_this), "paintCells", function (_ref) {
      var ctx = _ref.ctx,
          cellOffsetX = _ref.cellOffsetX,
          cellOffsetY = _ref.cellOffsetY,
          startRowIndex = _ref.startRowIndex,
          endRowIndex = _ref.endRowIndex,
          startColIndex = _ref.startColIndex,
          endColIndex = _ref.endColIndex,
          width = _ref.width,
          height = _ref.height;
      var _this$state = _this.state,
          rowWidth = _this$state.rowWidth,
          colHeight = _this$state.colHeight,
          dataSource = _this$state.dataSource;
      var startTop = cellOffsetY + colHeight;

      for (var i = startColIndex; i <= endColIndex; i++) {
        // 当前单元格宽度
        var h = _this.rowHeight(i); // 单元格开始位置


        var startPointY = startTop - 0.5; // 下一个单元格开始位置

        startTop += h;
        var startLeft = cellOffsetX + rowWidth;

        for (var j = startRowIndex; j <= endRowIndex; j++) {
          var _dataSource$i;

          var text = (dataSource === null || dataSource === void 0 ? void 0 : (_dataSource$i = dataSource[i]) === null || _dataSource$i === void 0 ? void 0 : _dataSource$i[j]) || '';

          var w = _this.colWidth(j); // 单元格开始位置


          var startPointX = startLeft - 0.5; // 下一个单元格开始位置

          startLeft += w; // 矩形填充

          ctx.fillStyle = '#fff';
          ctx.fillRect(startPointX, startPointY, w, h); // 矩形边框

          ctx.lineWidth = 1;
          ctx.strokeStyle = '#cecece';
          ctx.strokeRect(startPointX, startPointY, w, h); // 文本

          ctx.globalCompositeOperation = 'source-over';
          ctx.font = '16px PingFang SC';
          ctx.fillStyle = '#333';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, startPointX + w / 2, startPointY + h / 2);
        }
      }

      ctx.clearRect(0, 0, rowWidth, height);
      ctx.clearRect(0, 0, width, colHeight);
    });

    _defineProperty(_assertThisInitialized(_this), "setCursor", function () {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pointer';

      _this.setState({
        style: _objectSpread(_objectSpread({}, _this.state.style), {}, {
          cursor: type
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCanvasClick", function (e) {
      console.log(_this.position(e));
    });

    _this.position = _this.position.bind(_assertThisInitialized(_this));
    _this.colWidth = _this.colWidth.bind(_assertThisInitialized(_this));
    _this.rowHeight = _this.rowHeight.bind(_assertThisInitialized(_this));
    _this.handleWheel = _this.handleWheel.bind(_assertThisInitialized(_this));
    _this.state = _defineProperty({
      cellWidth: props.cellWidth || _this.defaultConfig.cellWidth,
      cellHeight: props.cellHeight || _this.defaultConfig.cellHeight,
      // 列头高度
      colHeight: _this.defaultConfig.colHeight,
      // 行头宽度
      rowWidth: _this.defaultConfig.rowWidth,
      widths: {
        0: 200,
        1: 100,
        3: 90
      },
      heights: {},
      styles: {},
      // 纵向滚动距离
      scrollTop: 0,
      // 横向滚动距离
      scrollLeft: 0,
      focusCellStyle: {
        width: 80,
        height: 25,
        top: 30,
        left: 100
      },
      focusCells: {
        start: {
          x: 0,
          y: 0
        },
        end: null
      },
      canvasStyle: {},
      dataSource: props.dataSource,
      pageX: -100,
      pageY: 100
    }, "dataSource", props.dataSource);
    return _this;
  } // row 行 col 列


  _createClass(Scroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var resizeObserver = new ResizeObserver(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            _this2.paintInit(entry.target);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      var dom = document.querySelector('#canvas_wrap');
      resizeObserver.observe(dom);
      dom === null || dom === void 0 ? void 0 : dom.addEventListener(_tools.isFirefox ? 'DOMMouseScroll' : 'mousewheel', this.handleWheel); // dom?.addEventListener('mousemove', this.handleMousemove, true);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.setState({
        dataSource: nextProps.dataSource
      }, function () {
        _this3.paintInit();
      });
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      var _this4 = this;

      e.preventDefault();
      var deltaX = e.deltaX,
          deltaY = e.deltaY;
      var _this$state3 = this.state,
          scrollTop = _this$state3.scrollTop,
          scrollLeft = _this$state3.scrollLeft,
          rowWidth = _this$state3.rowWidth;
      var _deltaX = 0;
      var _deltaY = 0;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        _deltaX = deltaX;
      } else {
        _deltaY = deltaY;
      } // 滚动到起点 就不必要刷新了
      // if(
      //   scrollLeft <= 0 && _deltaX <= 0 &&
      //   scrollTop <= 0 && _deltaY <= 0
      //   )return;


      var _scrollTop = scrollTop + _deltaY;

      var _scrollLeft = scrollLeft + _deltaX;

      this.setState({
        scrollTop: _scrollTop <= 0 ? 0 : _scrollTop,
        scrollLeft: _scrollLeft <= 0 ? 0 : _scrollLeft
      }, function () {
        _this4.paintInit();
      });
    }
  }, {
    key: "paintInit",
    value: function paintInit(dom) {
      dom = dom || document.querySelector('#canvas_wrap');
      var endColIndex = this.standard.endColIndex;
      endColIndex && this.setState({
        rowWidth: this.defaultConfig.rowWidth + (endColIndex.toString().length - 1) * 10
      });

      if (dom) {
        var _dom$getBoundingClien = dom.getBoundingClientRect(),
            width = _dom$getBoundingClien.width,
            height = _dom$getBoundingClien.height;

        this.canvasInit(width, height);
      }
    }
  }, {
    key: "canvasInit",
    value: function canvasInit(w, h) {
      var rowColCanvas = document.getElementById('row-col-canvas');
      var contentCanvas = document.getElementById('content-canvas');
      if (!rowColCanvas || !contentCanvas) return;
      rowColCanvas.width = w * this.ratio; // 实际渲染像素

      rowColCanvas.height = h * this.ratio; // 实际渲染像素

      rowColCanvas.style.width = "".concat(w, "px"); // 控制显示大小

      rowColCanvas.style.height = "".concat(h, "px"); // 控制显示大小

      var rcctx = rowColCanvas.getContext('2d');
      rcctx.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
      contentCanvas.width = w * this.ratio;
      contentCanvas.height = h * this.ratio;
      contentCanvas.style.width = "".concat(w, "px");
      contentCanvas.style.height = "".concat(h, "px");
      var cctx = contentCanvas.getContext('2d');
      cctx.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
      var _this$state4 = this.state,
          scrollLeft = _this$state4.scrollLeft,
          scrollTop = _this$state4.scrollTop; // 寻找开始位置处是第几列
      // 宽度累加 与滚动条的偏移量对比 寻找从第几列开始绘制

      var startRowIndex = 0;
      var offsetX = this.colWidth(startRowIndex);

      while (offsetX < scrollLeft) {
        startRowIndex++;
        offsetX += this.colWidth(startRowIndex);
      } // 寻找结束位置处是第几列
      // 宽度累加 寻找可视区域需要绘制到多少列 默认最初的宽度是第一列显示出来的宽度


      var row_acc = offsetX - scrollLeft;
      var endRowIndex = startRowIndex;

      while (row_acc < w) {
        endRowIndex++;
        row_acc += this.colWidth(endRowIndex);
      } // 可视区域第一列绘制的起始位置 列偏移量


      var cellOffsetX = offsetX - scrollLeft - this.colWidth(startRowIndex);
      ; // 寻找开始位置处是第几行

      var startColIndex = 0;
      var offsetY = this.rowHeight(startColIndex);

      while (offsetY < scrollTop) {
        startColIndex++;
        offsetY += this.rowHeight(startColIndex);
      } // 寻找结束位置处是第几行
      // 高度累加 寻找可视区域需要绘制到多少行 默认最初的宽度是第一行显示出来的高度


      var col_acc = offsetY - scrollTop;
      var endColIndex = startColIndex;

      while (col_acc < h) {
        endColIndex++;
        col_acc += this.rowHeight(endColIndex);
      } // 可视区域第一行绘制的起始位置 行偏移量


      var cellOffsetY = offsetY - scrollTop - this.rowHeight(endColIndex);
      this.standard = {
        cellOffsetX: cellOffsetX,
        startRowIndex: startRowIndex,
        endRowIndex: endRowIndex,
        cellOffsetY: cellOffsetY,
        startColIndex: startColIndex,
        endColIndex: endColIndex,
        width: w,
        height: h
      }; // 列头 从x位置开始绘制 startRowIndex列 到 startRowIndex + 20列

      this.paintRow(rcctx, cellOffsetX, startRowIndex, endRowIndex, w); // 行头

      this.paintCol(rcctx, cellOffsetY, startColIndex, endColIndex, h); // 竖线
      // this.paintVerticalLine(cctx, cellOffsetX, startRowIndex, endRowIndex, h);
      // // 水平线
      // this.paintHorizontalLine(cctx, cellOffsetY, startColIndex, endColIndex, w);

      this.paintCells({
        ctx: cctx,
        cellOffsetX: cellOffsetX,
        cellOffsetY: cellOffsetY,
        startRowIndex: startRowIndex,
        endRowIndex: endRowIndex,
        startColIndex: startColIndex,
        endColIndex: endColIndex,
        width: w,
        height: h
      });
    }
  }, {
    key: "paintRow",
    value:
    /**
     * 绘制可视区域的列头
     * @param {*} ctx 
     * @param {*} x 首个单元格的起始位置
     * @param {*} start 起始单元格的索引
     * @param {*} end 结束单元格的索引
     */
    function paintRow(ctx, x, start, end, w) {
      var _this$state5 = this.state,
          rowWidth = _this$state5.rowWidth,
          widths = _this$state5.widths,
          cellWidth = _this$state5.cellWidth,
          colHeight = _this$state5.colHeight; // 先擦除后绘制

      ctx.clearRect(0, 0, w, colHeight);
      var startLeft = x + rowWidth;

      for (var index = start; index <= end; index++) {
        // 当前单元格宽度
        var width = this.colWidth(index); // 单元格开始位置

        var startPointX = startLeft - 0.5; // 下一个单元格开始位置

        startLeft += width;
        ctx.beginPath(); // 矩形填充

        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(startPointX, 0, width, colHeight); // 矩形边框

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#cecece';
        ctx.strokeRect(startPointX, 0, width, colHeight); // 文本

        ctx.globalCompositeOperation = 'source-over';
        ctx.font = '16px PingFang SC';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'; // 绘制列名

        ctx.fillText((0, _tools.colTitle)(index + 1), startPointX + width / 2, colHeight / 2);
        ctx.stroke();
        ctx.closePath();
      }

      ctx.clearRect(0, 0, rowWidth - 0.5, colHeight + 1);
    }
    /**
     * 绘制可视区域的行头
     * @param {*} ctx 
     * @param {*} y 首个单元格的起始位置
     * @param {*} start 起始单元格的索引
     * @param {*} end 结束单元格的索引
     * @param {*} h 
     */

  }, {
    key: "paintCol",
    value: function paintCol(ctx, y, start, end, h) {
      var _this$state6 = this.state,
          rowWidth = _this$state6.rowWidth,
          colHeight = _this$state6.colHeight; // 先擦除后绘制

      ctx.clearRect(0, 0, rowWidth, h);
      var startTop = y + colHeight;

      for (var index = start; index <= end; index++) {
        // 当前单元格宽度
        var height = this.rowHeight(index); // 单元格开始位置

        var startPointY = startTop - 0.5; // 下一个单元格开始位置

        startTop += height;
        ctx.beginPath(); // 矩形填充

        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(0, startPointY, rowWidth, height); // 矩形边框

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#cecece';
        ctx.strokeRect(0, startPointY, rowWidth, height); // 文本

        ctx.globalCompositeOperation = 'source-over';
        ctx.font = '16px PingFang SC';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle'; // 绘制列名

        ctx.fillText(index + 1, rowWidth / 2, startPointY + height / 2);
        ctx.stroke();
        ctx.closePath();
        ctx.clearRect(0, 0, rowWidth - 0.5, colHeight + 1);
      }
    }
  }, {
    key: "paintVerticalLine",
    value: function paintVerticalLine(ctx, x, start, end, h) {
      var _this$state7 = this.state,
          rowWidth = _this$state7.rowWidth,
          widths = _this$state7.widths,
          cellWidth = _this$state7.cellWidth,
          colHeight = _this$state7.colHeight;
      var startLeft = x + rowWidth; // 竖线

      for (var index = start; index <= end; index++) {
        // 当前单元格宽度
        var width = this.colWidth(index); // 单元格开始位置

        var startPointX = startLeft - 0.5; // 下一个单元格开始位置

        startLeft += width;
        (0, _tools.drawLine)({
          context: ctx,
          x1: startPointX,
          y1: colHeight,
          x2: startPointX,
          y2: h
        });
      }
    }
  }, {
    key: "paintHorizontalLine",
    value: function paintHorizontalLine(ctx, y, start, end, w) {
      var _this$state8 = this.state,
          rowWidth = _this$state8.rowWidth,
          colHeight = _this$state8.colHeight;
      var startTop = y + colHeight; // 竖线

      for (var index = start; index <= end; index++) {
        // 当前单元格宽度
        var height = this.rowHeight(index); // 单元格开始位置

        var startPointY = startTop - 0.5; // 下一个单元格开始位置

        startTop += height;
        (0, _tools.drawLine)({
          context: ctx,
          x1: rowWidth,
          y1: startPointY,
          x2: w,
          y2: startPointY
        });
      }
    }
  }, {
    key: "position",
    value: function position(e) {
      var pageX = e.pageX,
          pageY = e.pageY,
          currentTarget = e.currentTarget;
      var offsetLeft = pageX - currentTarget.offsetLeft;
      var offsetTop = pageY - currentTarget.offsetTop;
      var _this$state9 = this.state,
          colHeight = _this$state9.colHeight,
          rowWidth = _this$state9.rowWidth,
          scrollTop = _this$state9.scrollTop,
          scrollLeft = _this$state9.scrollLeft;
      var x = null,
          y = null,
          row = null,
          col = null;
      var _this$standard = this.standard,
          cellOffsetX = _this$standard.cellOffsetX,
          cellOffsetY = _this$standard.cellOffsetY,
          startRowIndex = _this$standard.startRowIndex,
          startColIndex = _this$standard.startColIndex;

      if (offsetTop <= colHeight) {
        y = -1;
        row = -1;
      } else {
        y = startColIndex;
        var col_acc = colHeight + cellOffsetY + this.rowHeight(y);

        while (col_acc <= offsetTop) {
          y++;
          col_acc += this.rowHeight(y);
        }

        row = y + 1;
      }

      if (offsetLeft <= rowWidth) {
        x = -1;
        col = -1;
      } else {
        x = startRowIndex;
        var row_acc = rowWidth + cellOffsetX + this.colWidth(x);

        while (row_acc <= offsetLeft) {
          x++;
          row_acc += this.colWidth(x);
        }

        col = x + 1;
      }

      return {
        x: x,
        y: y,
        row: row,
        col: (0, _tools.colTitle)(col),
        cell: "".concat((0, _tools.colTitle)(col)).concat(row),
        offsetLeft: offsetLeft,
        offsetTop: offsetTop
      };
    }
    /**
     * @param {*} i 第几列
     * @returns 列宽
     */

  }, {
    key: "colWidth",
    value: function colWidth(i) {
      var _this$state10 = this.state,
          widths = _this$state10.widths,
          cellWidth = _this$state10.cellWidth;
      return widths[i] || cellWidth;
    }
    /**
     * @param {*} i 第几行
     * @returns 行高
     */

  }, {
    key: "rowHeight",
    value: function rowHeight(i) {
      var _this$state11 = this.state,
          heights = _this$state11.heights,
          cellHeight = _this$state11.cellHeight;
      return heights[i] || cellHeight;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state12 = this.state,
          styles = _this$state12.styles,
          focusCellStyle = _this$state12.focusCellStyle,
          canvasStyle = _this$state12.canvasStyle,
          scrollLeft = _this$state12.scrollLeft,
          scrollTop = _this$state12.scrollTop,
          pageX = _this$state12.pageX,
          pageY = _this$state12.pageY;
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className;

      var _className = (0, _classnames["default"])('excel-wrap', className);

      var _style = _objectSpread(_objectSpread({}, style), styles);

      var _focusCellStyle = _objectSpread(_objectSpread({}, focusCellStyle), {}, {
        top: focusCellStyle.top - scrollTop,
        left: focusCellStyle.left - scrollLeft
      }); // console.log(pageX, pageY)


      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _className,
        style: _style,
        id: "canvas_wrap",
        onClick: this.handleCanvasClick
      }, /*#__PURE__*/_react["default"].createElement("canvas", {
        id: "row-col-canvas"
      }), /*#__PURE__*/_react["default"].createElement("canvas", {
        id: "content-canvas"
      }));
    }
  }]);

  return Scroll;
}(_react.Component);

exports["default"] = Scroll;