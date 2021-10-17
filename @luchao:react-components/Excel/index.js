"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tools = require("./tools");

var _keyboardShortcut = _interopRequireDefault(require("../keyboardShortcut"));

require("./index.scss");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var timer = null;
var Excel = (_dec = (0, _keyboardShortcut["default"])(), _dec(_class = /*#__PURE__*/function (_Component) {
  _inherits(Excel, _Component);

  var _super = _createSuper(Excel);

  function Excel(props) {
    var _this;

    _classCallCheck(this, Excel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "mouseDownSign", false);

    _defineProperty(_assertThisInitialized(_this), "ratio", window.devicePixelRatio || 1);

    _defineProperty(_assertThisInitialized(_this), "defaultConfig", {
      cellWidth: 80,
      cellHeight: 25,
      colHeight: 25,
      rowWidth: 25
    });

    _defineProperty(_assertThisInitialized(_this), "standard", {});

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
          dataSource = _this$state.dataSource,
          focusCells = _this$state.focusCells;

      var _handleFocusCells = (0, _tools.handleFocusCells)(focusCells.start, focusCells.end),
          start = _handleFocusCells.start,
          end = _handleFocusCells.end;

      var startTop = cellOffsetY + colHeight;
      var focusX = [start.x, end.x];
      var focusY = [start.y, end.y];
      var drawLineArray = [];

      for (var i = startRowIndex; i <= endRowIndex; i++) {
        // 当前单元格宽度
        var h = _this.rowHeight(i); // 单元格开始位置


        var startPointY = startTop - 0.5; // 下一个单元格开始位置

        startTop += h;
        var startLeft = cellOffsetX + rowWidth;

        for (var j = startColIndex; j <= endColIndex; j++) {
          var _dataSource, _dataSource2;

          // 单元格文本内容
          var text = (dataSource === null || dataSource === void 0 ? void 0 : (_dataSource = dataSource[i - 1]) === null || _dataSource === void 0 ? void 0 : (_dataSource2 = _dataSource[j - 1]) === null || _dataSource2 === void 0 ? void 0 : _dataSource2.value) || '';

          var w = _this.colWidth(j); // 单元格开始位置


          var startPointX = startLeft - 0.5; // 下一个单元格开始位置

          startLeft += w;
          var fillStyle = null;
          var strokeStyle = '#d4d4d4';

          if (j === focusX[0] && i === focusY[0]) {
            fillStyle = '#fff';
          } else if (j >= focusX[0] && j <= focusX[1] && i >= focusY[0] && i <= focusY[1]) {
            fillStyle = '#c6c6c6';
            strokeStyle = '#a5a5a5';
          } else {
            fillStyle = '#fff';
          } // 矩形填充


          (0, _tools.fillRect)({
            context: ctx,
            fillStyle: fillStyle,
            x: startPointX,
            y: startPointY,
            width: w,
            height: h
          }); // 矩形边框

          (0, _tools.strokeRect)({
            context: ctx,
            strokeStyle: strokeStyle,
            x: startPointX,
            y: startPointY,
            width: w,
            height: h
          }); // 文本

          (0, _tools.fillText)({
            context: ctx,
            globalCompositeOperation: 'source-over',
            font: '14px PingFang SC',
            fillStyle: '#333',
            text: text,
            x: startPointX + 5,
            y: startPointY + h / 2
          }); // 左边线

          if (j === start.x && i >= start.y && i <= end.y) {
            drawLineArray.push({
              x1: startPointX,
              y1: startPointY,
              x2: startPointX,
              y2: startPointY + h
            });
          } // 上边线


          if (i === start.y && j >= start.x && j <= end.x) {
            drawLineArray.push({
              x1: startPointX,
              y1: startPointY,
              x2: startPointX + w,
              y2: startPointY
            });
          } // 右边线


          if (j === end.x && i >= start.y && i <= end.y) {
            drawLineArray.push({
              x1: startPointX + w,
              y1: startPointY,
              x2: startPointX + w,
              y2: startPointY + h
            });
          } // 下边线


          if (i === end.y && j >= start.x && j <= end.x) {
            drawLineArray.push({
              x1: startPointX,
              y1: startPointY + h,
              x2: startPointX + w,
              y2: startPointY + h
            });
          }
        }
      } // 单元格选中


      drawLineArray.forEach(function (item) {
        (0, _tools.drawLine)(_objectSpread(_objectSpread({}, item), {}, {
          context: ctx,
          lineWidth: 2,
          strokeStyle: '#217346'
        }));
      }); // 单元格canvas清除表头的区域

      ctx.clearRect(0, 0, rowWidth + 1, height);
      ctx.clearRect(0, 0, width, colHeight + 1);
    });

    _defineProperty(_assertThisInitialized(_this), "setCursor", function () {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pointer';

      _this.setState(function (prevState) {
        return {
          style: _objectSpread(_objectSpread({}, prevState.style), {}, {
            cursor: type
          })
        };
      });
    });

    _this.colWidth = _tools.colWidth.bind(_assertThisInitialized(_this));
    _this.rowHeight = _tools.rowHeight.bind(_assertThisInitialized(_this));
    _this.position = _this.position.bind(_assertThisInitialized(_this));
    _this.handleWheel = _this.handleWheel.bind(_assertThisInitialized(_this));
    _this.state = {
      cellWidth: props.cellWidth || _this.defaultConfig.cellWidth,
      cellHeight: props.cellHeight || _this.defaultConfig.cellHeight,
      // 列头高度
      colHeight: _this.defaultConfig.colHeight,
      // 行头宽度
      rowWidth: _this.defaultConfig.rowWidth,
      widths: {
        'A': 200,
        'B': 100,
        'C': 90
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
        start: null,
        end: null
      },
      dataSource: props.dataSource
    };
    return _this;
  }

  _createClass(Excel, [{
    key: "onkeydown",
    value: function onkeydown() {
      var _this2 = this;

      return {
        contextmenu: function contextmenu(e) {
          e.preventDefault();
          console.log('右键菜单');
        },
        copy: function copy(e) {
          var focusCells = _this2.state.focusCells;

          var _handleFocusCells2 = (0, _tools.handleFocusCells)(focusCells.start, focusCells.end),
              start = _handleFocusCells2.start,
              end = _handleFocusCells2.end;

          console.log(start, end);
        },
        paste: function paste(e) {
          if (e.clipboardData || e.originalEvent) {
            e.preventDefault();
            var clipboardData = e.clipboardData || window.clipboardData; // 检查是否复制了excel内容 

            var html = clipboardData.getData('text/html');
            var result = (0, _tools.tableToArray)(html); // 复制的字符串内容

            if (result.length === 0) {
              result = [[{
                format: 'string',
                value: clipboardData.getData('text')
              }]];
            }

            var focusCells = _this2.state.focusCells;

            var _handleFocusCells3 = (0, _tools.handleFocusCells)(focusCells.start, focusCells.end),
                start = _handleFocusCells3.start;

            if (start && start.x > 0 && start.y > 0) {
              var cell = "".concat(_tools.base26.column(start.x)).concat(start.y);

              _this2.excelInsetContent(cell, result);
            }
          }
        }
      };
    } // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ excel 操作方法 ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    /**
     * 覆盖内容
     * @param {*} startCell 开始单元格
     * @param {*} content 内容 [[{}, {}], [{}, {}], [{}, {}]]
     */

  }, {
    key: "excelInsetContent",
    value: function excelInsetContent(startCell, content) {
      if (startCell) {
        var _startCell$match = startCell.match(/([A-Z]+)([0-9]+)/),
            _startCell$match2 = _slicedToArray(_startCell$match, 3),
            _ = _startCell$match2[0],
            col = _startCell$match2[1],
            row = _startCell$match2[2];

        var _col = _tools.base26.index(col) - 1;

        var _row = Number(row) - 1;

        var dataSource = _toConsumableArray(this.state.dataSource);

        content.forEach(function (rowContent, rowIndex) {
          if (rowContent.length === 0) {
            // 空行使用空数组占位
            return dataSource[rowIndex + _row] = [];
          }

          rowContent.forEach(function (colCotent, colIndex) {
            if (!dataSource[rowIndex + _row]) dataSource[rowIndex + _row] = [];
            dataSource[rowIndex + _row][colIndex + _col] = colCotent;
          });
        });
        this.onSetDataSourceAndPaintInit(dataSource);
      }
    }
    /**
     * 获取excel数据
     */

  }, {
    key: "getExcelData",
    value: function getExcelData() {
      var dataSource = _toConsumableArray(this.state.dataSource);

      for (var i = 0, len = dataSource.length; i < len; i++) {
        dataSource[i] = dataSource[i] || [];

        for (var j = 0, l = dataSource[i].length; j < l; j++) {
          dataSource[i][j] = dataSource[i][j] || null;
        }
      }

      return dataSource;
    }
    /**
     * 聚焦单元格
     * @param {*} cell 
     */

  }, {
    key: "focusCell",
    value: function focusCell(cell) {
      console.log(cell);
    } // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ excel 操作方法 ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    // row 行 col 列

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      window.excel = this;
      var resizeObserver = new ResizeObserver(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            _this3.paintInit(entry.target);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      var dom = document.querySelector('#canvas_wrap');
      resizeObserver.observe(dom);
      dom === null || dom === void 0 ? void 0 : dom.addEventListener(_tools.isFirefox ? 'DOMMouseScroll' : 'mousewheel', this.handleWheel);
    } // 修改 dataSource,并重回canvas

  }, {
    key: "onSetDataSourceAndPaintInit",
    value: function onSetDataSourceAndPaintInit(dataSource) {
      var _this4 = this;

      var other = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.setState(_objectSpread({
        dataSource: dataSource
      }, other), function () {
        _this4.paintInit();
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.onSetDataSourceAndPaintInit(nextProps.dataSource);
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      var _this5 = this;

      e.preventDefault();
      var deltaX = e.deltaX,
          deltaY = e.deltaY;
      var _this$state2 = this.state,
          scrollTop = _this$state2.scrollTop,
          scrollLeft = _this$state2.scrollLeft;
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
        _this5.paintInit();
      });
    }
  }, {
    key: "paintInit",
    value: function paintInit(dom) {
      var _dom = dom || document.querySelector('#canvas_wrap');

      var endRowIndex = this.standard.endRowIndex; // 序号的大小影响行头的宽度

      endRowIndex && this.setState({
        rowWidth: this.defaultConfig.rowWidth + (endRowIndex.toString().length - 1) * 10
      });

      if (_dom) {
        var _dom$getBoundingClien = _dom.getBoundingClientRect(),
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

      if (!rowColCanvas || !contentCanvas) {
        return;
      }

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
      var _this$state3 = this.state,
          scrollLeft = _this$state3.scrollLeft,
          scrollTop = _this$state3.scrollTop; // 寻找开始位置处是第几列
      // 宽度累加 与滚动条的偏移量对比 寻找从第几列开始绘制

      var startColIndex = 1;
      var offsetX = this.colWidth(startColIndex);

      while (offsetX < scrollLeft) {
        startColIndex++;
        offsetX += this.colWidth(startColIndex);
      } // 寻找结束位置处是第几列
      // 宽度累加 寻找可视区域需要绘制到多少列 默认最初的宽度是第一列显示出来的宽度


      var col_acc = offsetX - scrollLeft;
      var endColIndex = startColIndex;

      while (col_acc < w) {
        endColIndex++;
        col_acc += this.colWidth(endColIndex);
      } // 可视区域第一列绘制的起始位置 列偏移量


      var cellOffsetX = offsetX - scrollLeft - this.colWidth(startColIndex); // 寻找开始位置处是第几行

      var startRowIndex = 1;
      var offsetY = this.rowHeight(startRowIndex);

      while (offsetY < scrollTop) {
        startRowIndex++;
        offsetY += this.rowHeight(startRowIndex);
      } // 寻找结束位置处是第几行
      // 高度累加 寻找可视区域需要绘制到多少行 默认最初的宽度是第一行显示出来的高度


      var row_acc = offsetY - scrollTop;
      var endRowIndex = startRowIndex;

      while (row_acc < h) {
        endRowIndex++;
        row_acc += this.rowHeight(endRowIndex);
      } // 可视区域第一行绘制的起始位置 行偏移量


      var cellOffsetY = offsetY - scrollTop - this.rowHeight(endRowIndex);
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

      this.paintCol(rcctx, cellOffsetX, startColIndex, endColIndex, w); // 行头

      this.paintRow(rcctx, cellOffsetY, startRowIndex, endRowIndex, h); // 单元格

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
      }); // 左上角

      this.paintTriangle(rcctx);
    } // 左上角

  }, {
    key: "paintTriangle",
    value: function paintTriangle(ctx) {
      var _this$state4 = this.state,
          rowWidth = _this$state4.rowWidth,
          colHeight = _this$state4.colHeight; // 矩形填充

      (0, _tools.fillRect)({
        context: ctx,
        fillStyle: '#fff',
        x: 0,
        y: 0,
        width: rowWidth + 1,
        height: colHeight + 1
      }); // 矩形边框

      (0, _tools.strokeRect)({
        context: ctx,
        strokeStyle: '#cecece',
        x: 0.5,
        y: 0,
        width: rowWidth - 0.5,
        height: colHeight - 0.5
      });
      ctx.fillStyle = "#dfdfdf";
      ctx.moveTo(rowWidth - 2, 0.5);
      ctx.lineTo(rowWidth - 2, colHeight - 2);
      ctx.lineTo(0.5, colHeight - 2);
      ctx.lineTo(rowWidth - 2, 0.5);
      ctx.fill();
    } // 单元格区域

  }, {
    key: "paintCol",
    value:
    /**
     * 绘制可视区域的列头
     * @param {*} ctx 
     * @param {*} x 首个单元格的起始位置
     * @param {*} start 起始单元格的索引
     * @param {*} end 结束单元格的索引
     */
    function paintCol(ctx, x, start, end, w) {
      var _this$state5 = this.state,
          rowWidth = _this$state5.rowWidth,
          colHeight = _this$state5.colHeight,
          focusCells = _this$state5.focusCells; // 先擦除后绘制

      ctx.clearRect(0, 0, w, colHeight - 1);
      var startLeft = x + rowWidth;
      var focusX = null;

      if (focusCells.start && focusCells.end) {
        focusX = [focusCells.start.x, focusCells.end.x].bubbleSort();
      }

      var drawLineArray = [];

      for (var index = start; index <= end; index++) {
        // 当前单元格宽度
        var width = this.colWidth(index); // 单元格开始位置

        var startPointX = startLeft - 0.5; // 下一个单元格开始位置

        startLeft += width;
        ctx.beginPath();
        var fillStyle = null;
        var color = null;
        var strokeStyle = null; // 单元格选择的列标志线

        if (focusX && index >= focusX[0] && index <= focusX[1]) {
          fillStyle = '#d2d2d2';
          color = '#2a694a';
          strokeStyle = '#a6a6a6';
          drawLineArray.push({
            x1: startPointX,
            y1: colHeight - 0.5,
            x2: startPointX + width,
            y2: colHeight - 0.5
          });
        } else {
          fillStyle = '#e6e6e6';
          color = '#333';
          strokeStyle = '#9e9e9e';
        } // 矩形填充


        (0, _tools.fillRect)({
          context: ctx,
          fillStyle: fillStyle,
          x: startPointX,
          y: 0,
          width: width,
          height: colHeight
        }); // 矩形边框

        (0, _tools.strokeRect)({
          context: ctx,
          strokeStyle: strokeStyle,
          x: startPointX,
          y: 0,
          width: width,
          height: colHeight - 0.5
        }); // 文本

        (0, _tools.fillText)({
          context: ctx,
          font: '16px PingFang SC',
          fillStyle: color,
          textAlign: 'left',
          text: _tools.base26.column(index),
          x: startPointX + 5,
          y: colHeight / 2
        });
        ctx.stroke();
        ctx.closePath();
      } // 清除左上角


      ctx.clearRect(0, 0, rowWidth, colHeight); // 单元格选择的行标志线

      drawLineArray.forEach(function (item) {
        (0, _tools.drawLine)(_objectSpread(_objectSpread({}, item), {}, {
          context: ctx,
          lineWidth: 2,
          strokeStyle: '#227346'
        }));
      });
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
    key: "paintRow",
    value: function paintRow(ctx, y, start, end, h) {
      var _this$state6 = this.state,
          rowWidth = _this$state6.rowWidth,
          colHeight = _this$state6.colHeight,
          focusCells = _this$state6.focusCells; // 先擦除后绘制

      ctx.clearRect(0, 0, rowWidth - 1, h);
      var startTop = y + colHeight;
      var focusY = null;

      if (focusCells.start && focusCells.end) {
        focusY = [focusCells.start.y, focusCells.end.y].bubbleSort();
      }

      var drawLineArray = [];

      for (var index = start; index <= end; index++) {
        // 当前单元格宽度
        var height = this.rowHeight(index); // 单元格开始位置

        var startPointY = startTop - 0.5; // 下一个单元格开始位置

        startTop += height;
        ctx.beginPath();
        var fillStyle = null;
        var color = null;
        var strokeStyle = null; // 单元格选择的行标志线

        if (focusY && index >= focusY[0] && index <= focusY[1]) {
          fillStyle = '#d2d2d2';
          color = '#2a694a';
          strokeStyle = '#a6a6a6';
          drawLineArray.push({
            x1: rowWidth,
            y1: startPointY,
            x2: rowWidth,
            y2: startPointY + height
          });
        } else {
          fillStyle = '#e6e6e6';
          color = '#333';
          strokeStyle = '#9e9e9e';
        } // 矩形填充


        (0, _tools.fillRect)({
          context: ctx,
          fillStyle: fillStyle,
          x: 0,
          y: startPointY,
          width: rowWidth,
          height: height
        }); // 矩形边框

        (0, _tools.strokeRect)({
          context: ctx,
          strokeStyle: strokeStyle,
          x: 0,
          y: startPointY,
          width: rowWidth,
          height: height
        }); // 文本

        (0, _tools.fillText)({
          context: ctx,
          font: '16px PingFang SC',
          fillStyle: color,
          textAlign: 'center',
          text: index,
          x: rowWidth / 2,
          y: startPointY + height / 2
        });
        ctx.stroke();
        ctx.closePath();
      } // 清除左上角


      ctx.clearRect(0, 0, rowWidth, colHeight); // 单元格选择的行标志线

      drawLineArray.forEach(function (item) {
        (0, _tools.drawLine)(_objectSpread(_objectSpread({}, item), {}, {
          context: ctx,
          lineWidth: 2,
          strokeStyle: '#227346'
        }));
      });
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      var _this6 = this;

      // 忽略 鼠标右键触发的点击事件
      if (e.button === 2) return;
      this.mouseDownSign = true;

      var _this$position = this.position(e),
          x = _this$position.x,
          y = _this$position.y;

      var start = null;
      var end = null;

      if (x <= 0 && y > 0) {
        start = {
          x: 1,
          y: y
        };
        end = {
          x: Number.MAX_VALUE,
          y: y
        };
      } else if (x > 0 && y <= 0) {
        start = {
          x: x,
          y: 1
        };
        end = {
          x: x,
          y: Number.MAX_VALUE
        };
      } else if (x === 0 && y === 0) {
        start = {
          x: 1,
          y: 1
        };
        end = {
          x: Number.MAX_VALUE,
          y: Number.MAX_VALUE
        };
      } else {
        start = {
          x: x,
          y: y
        };
        end = {
          x: x,
          y: y
        };
      }

      this.setState({
        focusCells: (0, _tools.handleFocusCells)(start, end)
      }, function () {
        _this6.paintInit();
      });
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      this.mouseDownSign = false;
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp() {
      this.mouseDownSign = false;
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(e) {
      var _this7 = this;

      var clientX = e.clientX,
          clientY = e.clientY,
          currentTarget = e.currentTarget;
      if (timer) return;
      timer = setTimeout(function () {
        timer = null;

        var position = _this7.position({
          clientX: clientX,
          clientY: clientY,
          currentTarget: currentTarget
        });

        _this7.setState({
          mouseMovePosition: position
        }, function () {
          _this7.handleMouseEvent(e, position);
        });

        if (!_this7.mouseDownSign) return;
        var x = position.x,
            y = position.y;

        var focusCells = _objectSpread({}, _this7.state.focusCells); // 记录起始与结束单元格


        focusCells[focusCells.start ? 'end' : 'start'] = {
          x: x,
          y: y
        };

        _this7.setState({
          focusCells: focusCells
        }, function () {
          _this7.paintInit();
        });
      }, 100);
    }
  }, {
    key: "handleMouseEvent",
    value: function handleMouseEvent(e, position) {// console.log(e, position)
    }
  }, {
    key: "position",
    value: function position(e) {
      var clientX = e.clientX,
          clientY = e.clientY,
          currentTarget = e.currentTarget;
      var offsetLeft = clientX - (currentTarget.getBoundingClientRect().left - document.documentElement.clientLeft);
      var offsetTop = clientY - (currentTarget.getBoundingClientRect().top - document.documentElement.clientTop);
      var _this$state7 = this.state,
          colHeight = _this$state7.colHeight,
          rowWidth = _this$state7.rowWidth;
      var x = null;
      var y = null;
      var _this$standard = this.standard,
          cellOffsetX = _this$standard.cellOffsetX,
          cellOffsetY = _this$standard.cellOffsetY,
          startRowIndex = _this$standard.startRowIndex,
          startColIndex = _this$standard.startColIndex;

      if (offsetTop <= colHeight) {
        y = 0;
      } else {
        y = startRowIndex;
        var col_acc = colHeight + cellOffsetY + this.rowHeight(y);

        while (col_acc <= offsetTop) {
          y++;
          col_acc += this.rowHeight(y);
        }
      }

      if (offsetLeft <= rowWidth) {
        x = 0;
      } else {
        x = startColIndex;
        var row_acc = rowWidth + cellOffsetX + this.colWidth(x);

        while (row_acc <= offsetLeft) {
          x++;
          row_acc += this.colWidth(x);
        }
      }

      return {
        x: x,
        y: y,
        row: y,
        col: _tools.base26.column(x),
        cell: "".concat(_tools.base26.column(x)).concat(y),
        offsetLeft: offsetLeft,
        offsetTop: offsetTop
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var styles = this.state.styles;
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className;

      var _className = (0, _classnames["default"])('excel-wrap', className);

      var _style = _objectSpread(_objectSpread({}, style), styles);

      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "canvas_wrap",
        style: _style,
        className: _className // onClick={(e) => this.handleMouseUp(e)}
        ,
        onMouseDown: function onMouseDown(e) {
          return _this8.handleMouseDown(e);
        },
        onMouseUp: function onMouseUp(e) {
          return _this8.handleMouseUp(e);
        },
        onMouseMove: function onMouseMove(e) {
          return _this8.handleMouseMove(e);
        },
        onMouseLeave: function onMouseLeave(e) {
          return _this8.handleMouseLeave(e);
        }
      }, /*#__PURE__*/_react["default"].createElement("canvas", {
        id: "row-col-canvas"
      }), /*#__PURE__*/_react["default"].createElement("canvas", {
        id: "content-canvas"
      }));
    }
  }]);

  return Excel;
}(_react.Component)) || _class);
exports["default"] = Excel;