"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@alifd/next/lib/input/style");

var _input = _interopRequireDefault(require("@alifd/next/lib/input"));

require("@alifd/next/lib/icon/style");

var _icon = _interopRequireDefault(require("@alifd/next/lib/icon"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IfElse = _interopRequireDefault(require("../IfElse"));

var _baseUtils = require("@luchao/base-utils");

var _utils = require("../utils");

require("./index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function handleDataSource(data) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var _data = _toConsumableArray(data);

  for (var i = 0; i < _data.length; i++) {
    var item = _objectSpread({}, _data[i]); // 父节点  


    item.parent = parent; // 下一个兄弟节点  

    item.nextSibling = _data[i + 1] || null; // 上一个兄弟节点  

    item.previousSibling = _data[i - 1] || null; // 节点索引  

    item._index = i; // 继续处理子节点  

    if (item.children) item.children = handleDataSource(item.children, item);
    _data[i] = item;
  }

  return _data;
}

var Tree = /*#__PURE__*/function (_React$Component) {
  _inherits(Tree, _React$Component);

  var _super = _createSuper(Tree);

  function Tree(props) {
    var _this;

    _classCallCheck(this, Tree);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onSearchChange", function (v) {
      var _this$state = _this.state,
          _dataSource = _this$state._dataSource,
          defaultExpandedKeys = _this$state.defaultExpandedKeys;

      if (!v) {
        return _this.setState({
          dataSource: handleDataSource(_dataSource),
          expandedKeys: defaultExpandedKeys
        });
      }

      var _handle = handle(_toConsumableArray(_dataSource)),
          _d = _handle.data,
          _k = _handle.keys;

      console.log(handle(_toConsumableArray(_dataSource)));

      _this.setState({
        dataSource: handleDataSource(_d),
        expandedKeys: _k,
        clickItem: null
      });

      function handle() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        for (var i = 0; i < array.length; i++) {
          var element = _objectSpread({}, array[i]); // 搜索命中分组  


          if (element.label.indexOf(v) >= 0) {
            data.push(element);
            keys.push(element.value);
            continue;
          } // 处理子节点  


          if (element.children) {
            var _handle2 = handle(element.children),
                _data = _handle2.data,
                _keys = _handle2.keys;

            if (0 in _data) {
              // 命中子节点
              element.children = _data;
              keys.push.apply(keys, _toConsumableArray(_keys).concat([element.value]));
            } else {
              // 未命中子节点  
              element.children = [];
            }
          }

          if (element.children && 0 in element.children || element.label.indexOf(v) >= 0) {
            data.push(element);
          }
        }

        return {
          data: data,
          keys: keys
        };
      }
    });

    _this.state = {
      _dataSource: props.dataSource,
      defaultExpandedKeys: props.defaultExpandedKeys || [],
      // 展开节点
      expandedKeys: [],
      dataSource: [],
      // 本组件拖拽中 增加这种状态，避免其他组件的拖拽影响  
      isDraging: false,
      // 正在拖拽中的节点  
      dragItem: null,
      // 点击过的节点 新增文件或目录或右键时的定位节点  
      clickItem: null,
      // 保存复制的分组或流程  
      copyItem: null,
      // 保存剪切的流程 分组无剪切功能  
      cutItem: null,
      // 右键菜单  
      contextmenu: {
        visible: false,
        offset: null,
        menu: [],
        disabled: []
      },
      // 当前所处的编辑或创建（文件，分组）状态 creating-file creating-dir editing-file editing-dir renaming-file renaming-dir  
      status: null,
      inputState: null
    };
    return _this;
  }

  _createClass(Tree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$defaultEx = _this$props.defaultExpandAll,
          defaultExpandAll = _this$props$defaultEx === void 0 ? false : _this$props$defaultEx,
          dataSource = _this$props.dataSource;

      if (defaultExpandAll) {
        return this.setState({
          expandedKeys: []
        }, function () {
          _this2.initDataSource(_this2.props);
        });
      }

      this.initDataSource(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.initDataSource(nextProps);
    }
  }, {
    key: "initDataSource",
    value: function initDataSource(_ref) {
      var dataSource = _ref.dataSource;
      var expandedKeys = this.state.expandedKeys;
      console.log(expandedKeys);
      this.setState({
        dataSource: handleDataSource(dataSource),
        expandedKeys: _toConsumableArray(new Set(_toConsumableArray(expandedKeys)))
      });
    } // 图标  

  }, {
    key: "titleIconTypeAndColor",
    value: function titleIconTypeAndColor(type, isExp) {
      if (type === 'main-dir') {
        return {
          type: 'iconliucheng',
          style: {
            color: '#8c8c8c'
          }
        };
      } else if (type === 'main-file') {
        return {
          type: 'iconliucheng',
          style: {
            color: '#0079F2'
          }
        };
      } else if (type === 'sub-file') {
        return {
          type: 'iconliucheng',
          style: {
            color: '#8c8c8c'
          }
        };
      } else if (type === 'sub-dir') {
        return {
          type: isExp ? 'icondakaiwenjianjia' : 'iconfolder-full',
          style: {
            color: '#0079F2'
          }
        };
      }
    }
  }, {
    key: "onTitleClick",
    value: function onTitleClick(_ref2) {
      var value = _ref2.value;
      var _expandedKeys = this.state.expandedKeys;

      var index = _expandedKeys.findIndex(function (k) {
        return k === value;
      });

      if (index >= 0) {
        _expandedKeys.splice(index, 1);
      } else {
        _expandedKeys.push(value);
      }

      this.setState({
        expandedKeys: _expandedKeys
      });
    } // 标题双击 打开流程  

  }, {
    key: "onTitleDoubleClick",
    value: function onTitleDoubleClick(info) {} // 拖入分组  

  }, {
    key: "onTitleDragEnter",
    value: function onTitleDragEnter(e, info) {
      e.preventDefault(); // 避免其他地方的拖拽在此产生效果  

      var isDraging = this.state.isDraging;
      if (!isDraging) return;
      var id = info.id,
          type = info.type; // if (type === 'sub-dir') {  
      //   const _expandedKeys = this.state.expandedKeys;  
      //   const index = _expandedKeys.findIndex((k) => k === id);  
      //   if (index >= 0) {  
      //     return;  
      //   } else {  
      //     _expandedKeys.push(id);  
      //   }  
      //   this.setState({ expandedKeys: _expandedKeys });  
      // }
    }
  }, {
    key: "onAreaDragEnter",
    value: function onAreaDragEnter(e) {
      // 避免其他地方的拖拽在此产生效果  
      var isDraging = this.state.isDraging;
      if (!isDraging) return;
      e.target.classList.add('rpa-tree-enter');
    }
  }, {
    key: "onAreaDragLeave",
    value: function onAreaDragLeave(e) {
      e.target.classList.remove('rpa-tree-enter');
    }
    /**  
     *  拖动放置  
     * @param {*} e  
     * @param {*} data 放置位置处的节点  
     * @param {*} location 相对位置 [after/before/inside]  
     * @returns  
     */

  }, {
    key: "onAreaDrop",
    value: function onAreaDrop(e, data, location) {
      var _locationNode$locatio;

      e === null || e === void 0 ? void 0 : e.preventDefault();
      this.setState({
        isDraging: false
      });
      e === null || e === void 0 ? void 0 : e.target.classList.remove('rpa-tree-enter');
      var dragItem = this.state.dragItem;

      var _ref3 = dragItem || {},
          value = _ref3.value;

      var locationNode = {
        before: data,
        after: data.nextSibling,
        inside: data.parent
      };

      if (!data || value === data.value || ((_locationNode$locatio = locationNode[location]) === null || _locationNode$locatio === void 0 ? void 0 : _locationNode$locatio.value) === dragItem.value // 放置在自身的前后位置
      ) {
        return false;
      }

      console.log(dragItem, data, location);
    }
    /**  
     * 拖拽开始  
     * @param {*} e  
     * @param {*} info 当前拖拽的节点  
     */

  }, {
    key: "onDragStart",
    value: function onDragStart(e, info) {
      var _this$props$onDragSta = this.props.onDragStart,
          onDragStart = _this$props$onDragSta === void 0 ? _baseUtils.empty : _this$props$onDragSta;
      onDragStart(info);
      this.setState({
        isDraging: true,
        dragItem: info
      });
    }
    /**  
     * 当前分组是否展开  
     * @param {*} key 节点 id  
     * @returns  
     */

  }, {
    key: "isExpanded",
    value: function isExpanded(key) {
      var _this$state$expandedK = this.state.expandedKeys,
          expandedKeys = _this$state$expandedK === void 0 ? [] : _this$state$expandedK;
      return expandedKeys.indexOf(key) >= 0;
    }
    /**  
     * 渲染拖曳事件的放置区域  
     * @param {*} deep 当前层级 便于缩进形成树形结构  
     * @param {*} data 当前节点  
     * @param {*} location 节点相对位置  
     * @returns  
     */

  }, {
    key: "renderDragArea",
    value: function renderDragArea(deep, data, location) {
      var _this3 = this;

      var _this$state2 = this.state,
          isDraging = _this$state2.isDraging,
          dragItem = _this$state2.dragItem;

      var _ref4 = dragItem || {},
          parent = _ref4.parent;

      var _data$canFileAddAhead = data.canFileAddAhead,
          canFileAddAhead = _data$canFileAddAhead === void 0 ? true : _data$canFileAddAhead,
          _data$canDirAddBehind = data.canDirAddBehind,
          canDirAddBehind = _data$canDirAddBehind === void 0 ? true : _data$canDirAddBehind,
          dataType = data.type;
      var isCan = location === 'before' && canFileAddAhead || location === 'after' && canDirAddBehind;
      var isCanDrop = isDraging && isCan;
      return /*#__PURE__*/_react["default"].createElement("li", {
        style: {
          marginLeft: deep * 15 + 5
        },
        className: "rpa-tree-area"
      }, /*#__PURE__*/_react["default"].createElement(_IfElse["default"], {
        condition: !!isCanDrop
      }, /*#__PURE__*/_react["default"].createElement("p", {
        onDragOver: function onDragOver(e) {
          return e.preventDefault();
        },
        onDragEnter: function onDragEnter(e) {
          return _this3.onAreaDragEnter(e);
        },
        onDragLeave: function onDragLeave(e) {
          return _this3.onAreaDragLeave(e);
        },
        onDrop: function onDrop(e) {
          return _this3.onAreaDrop(e, data, location);
        }
      })));
    } // 输入框失焦  

  }, {
    key: "onInputBlur",
    value: function onInputBlur(e, data) {}
  }, {
    key: "onInputChange",
    value: function onInputChange(v, _ref5) {
      var type = _ref5.type,
          name = _ref5.name;
    } // 搜索框  

  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this4 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: "rpa-tree-item"
      }, data.map(function (item, index) {
        var value = item.value,
            _item$label = item.label,
            label = _item$label === void 0 ? '' : _item$label,
            type = item.type,
            _item$children = item.children,
            children = _item$children === void 0 ? [] : _item$children,
            itemStatus = item.status,
            _item$canDragging = item.canDragging,
            canDragging = _item$canDragging === void 0 ? true : _item$canDragging,
            _item$canDirAddInside = item.canDirAddInside,
            canDirAddInside = _item$canDirAddInside === void 0 ? true : _item$canDirAddInside,
            _item$canFileAddInsid = item.canFileAddInside,
            canFileAddInside = _item$canFileAddInsid === void 0 ? true : _item$canFileAddInsid;
        var _this4$state = _this4.state,
            dragItem = _this4$state.dragItem,
            clickItem = _this4$state.clickItem,
            status = _this4$state.status,
            isDraging = _this4$state.isDraging,
            inputState = _this4$state.inputState; // 分组展开  

        var isExp = _this4.isExpanded(value); // 目录标题可以放置  


        var dropFun = (0, _utils.ternaryOperator)([isDraging, canDirAddInside || canFileAddInside], {
          onDragOver: function onDragOver(e) {
            return e.preventDefault();
          },
          onDrop: function onDrop(e) {
            return _this4.onAreaDrop(e, item, 'inside');
          }
        }); // 可放置条件  

        var draggable = canDragging && !status;
        var contentClass = (0, _classnames["default"])('rpa-tree-title-content', {
          'title-is-click': (clickItem === null || clickItem === void 0 ? void 0 : clickItem.name) === name && !itemStatus,
          'title-is-editing': itemStatus
        });
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
          key: value
        }, _this4.renderDragArea(deep, item, 'before'), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("div", _extends({
          className: "rpa-tree-title",
          onClick: function onClick() {
            return _this4.onTitleClick(item);
          },
          onDoubleClick: function onDoubleClick() {
            return _this4.onTitleDoubleClick(item);
          },
          style: {
            paddingLeft: deep * 15
          },
          onDragEnter: function onDragEnter(e) {
            return _this4.onTitleDragEnter(e, item);
          }
        }, dropFun), /*#__PURE__*/_react["default"].createElement("div", {
          draggable: draggable,
          className: contentClass,
          onDragStart: function onDragStart(e) {
            return draggable && _this4.onDragStart(e, item);
          }
        }, children.length !== 0 && /*#__PURE__*/_react["default"].createElement(_icon["default"], {
          size: "small",
          type: "arrow-right"
        }), /*#__PURE__*/_react["default"].createElement(_IfElse["default"], {
          condition: !!itemStatus
        }, /*#__PURE__*/_react["default"].createElement(_IfElse["default"].If, null, /*#__PURE__*/_react["default"].createElement(_input["default"], {
          autoFocus: true,
          spellCheck: "false",
          size: "small",
          style: {
            width: '100%'
          },
          state: inputState,
          defaultValue: label,
          onBlur: function onBlur(e) {
            return _this4.onInputBlur(e, item);
          },
          onPressEnter: function onPressEnter(e) {
            return _this4.onInputBlur(e, item);
          },
          onChange: function onChange(v) {
            return _this4.onInputChange(v, item);
          }
        })), /*#__PURE__*/_react["default"].createElement(_IfElse["default"].Else, null, /*#__PURE__*/_react["default"].createElement("p", {
          className: "ellipsis g-fs-12 rpa-tree-display-name",
          title: label
        }, label))))), /*#__PURE__*/_react["default"].createElement(_IfElse["default"], {
          condition: !!isExp
        }, _this4.renderChildren(children, deep + 1))), /*#__PURE__*/_react["default"].createElement(_IfElse["default"], {
          condition: index === data.length - 1
        }, _this4.renderDragArea(deep, item, 'after')));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state3 = this.state,
          dataSource = _this$state3.dataSource,
          clickItem = _this$state3.clickItem;
      var _this$props2 = this.props,
          className = _this$props2.className,
          style = _this$props2.style,
          showSearch = _this$props2.showSearch;

      var _className = (0, _classnames["default"])(className, 'rpa-tree-wrap');

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _className,
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: '100%'
        },
        onMouseLeave: function onMouseLeave() {
          return _this5.setState({
            isDraging: false
          });
        }
      }, showSearch && /*#__PURE__*/_react["default"].createElement(_input["default"], {
        style: {
          width: '100%'
        },
        innerBefore: /*#__PURE__*/_react["default"].createElement(_icon["default"], {
          type: "search",
          style: {
            margin: 4
          },
          onClick: this.onClick
        }),
        onChange: this.onSearchChange
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "g-p-lr-16 flow-tree-wrap webkit-scrollbar"
      }, this.renderChildren(dataSource))));
    }
  }]);

  return Tree;
}(_react["default"].Component);

var _default = Tree;
exports["default"] = _default;