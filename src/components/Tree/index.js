import React from 'react';  
import cx from 'classnames';   
import IfElse from '../IfElse'; 
import {  
  Icon,
  Input,  
} from '@alifd/next';  
import { empty } from '@luchao/base-utils'
import { ternaryOperator } from '../utils'
// import { remove } from 'lodash';  
import './index.scss';  

function handleDataSource(data, parent = null) {
  const _data = [...data];  
  for (let i = 0; i < _data.length; i++) {
    const item = { ..._data[i] };  
    // 父节点  
    item.parent = parent;  
    // 下一个兄弟节点  
    item.nextSibling = _data[i + 1] || null;  
    // 上一个兄弟节点  
    item.previousSibling = _data[i - 1] || null;  
    // 节点索引  
    item._index = i;  
    // 继续处理子节点  
    if (item.children) item.children = handleDataSource(item.children, item);  
    _data[i] = item;
  }  
  return _data;
}  
class Tree extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {  
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
        disabled: [],  
      },  
      // 当前所处的编辑或创建（文件，分组）状态 creating-file creating-dir editing-file editing-dir renaming-file renaming-dir  
      status: null,  
      inputState: null,   
    };
  }  

  componentDidMount() {
    const { defaultExpandAll = false, dataSource } = this.props;
    if (defaultExpandAll) {
      return this.setState({
        expandedKeys: []
      }, () => {
        this.initDataSource(this.props);
      })
    }
    this.initDataSource(this.props);
  }  

  componentWillReceiveProps(nextProps) {
    this.initDataSource(nextProps);
  }  

  initDataSource({ dataSource }) {
    const { expandedKeys } = this.state; 
    console.log(expandedKeys) 
    this.setState({  
      dataSource: handleDataSource(dataSource),  
      expandedKeys: [...new Set([...expandedKeys])],  
    });
  }  

  // 图标  
  titleIconTypeAndColor(type, isExp) {
    if (type === 'main-dir') {
      return {  
        type: 'iconliucheng',  
        style: { color: '#8c8c8c' },  
      };
    } else if (type === 'main-file') {
      return {  
        type: 'iconliucheng',  
        style: { color: '#0079F2' },  
      };
    } else if (type === 'sub-file') {
      return {  
        type: 'iconliucheng',  
        style: { color: '#8c8c8c' },  
      };
    } else if (type === 'sub-dir') {
      return {  
        type: isExp ? 'icondakaiwenjianjia' : 'iconfolder-full',  
        style: { color: '#0079F2' },  
      };
    }
  }  

  onTitleClick({value}) {
    const _expandedKeys = this.state.expandedKeys;
    const index = _expandedKeys.findIndex((k) => k === value);
    if (index >= 0) {
      _expandedKeys.splice(index, 1);
    } else {
      _expandedKeys.push(value);
    }
    this.setState({ expandedKeys: _expandedKeys });
  }  

  // 标题双击 打开流程  
  onTitleDoubleClick(info) {
    
  }  

  // 拖入分组  
  onTitleDragEnter(e, info) {
    e.preventDefault();  
    // 避免其他地方的拖拽在此产生效果  
    const { isDraging } = this.state;  
    if (!isDraging) return;  
    const { id, type } = info;  
    // if (type === 'sub-dir') {  
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

  onAreaDragEnter(e) {
    // 避免其他地方的拖拽在此产生效果  
    const { isDraging } = this.state;  
    if (!isDraging) return;  
    e.target.classList.add('rpa-tree-enter');
  }  

  onAreaDragLeave(e) {
    e.target.classList.remove('rpa-tree-enter');
  }  

  /**  
   *  拖动放置  
   * @param {*} e  
   * @param {*} data 放置位置处的节点  
   * @param {*} location 相对位置 [after/before/inside]  
   * @returns  
   */  
  onAreaDrop(e, data, location) {
    e?.preventDefault();
    this.setState({isDraging: false});
		e?.target.classList.remove('rpa-tree-enter');
		const { dragItem } = this.state;
		const { value } = dragItem || {};
		const locationNode = {
		  before: data,
		  after: data.nextSibling,
		  inside: data.parent,
		};

		if (
		  !data ||
			value === data.value ||
			locationNode[location]?.value === dragItem.value // 放置在自身的前后位置
		) {
		  return false;
		}
		console.log(dragItem, data, location)
  }  

  /**  
   * 拖拽开始  
   * @param {*} e  
   * @param {*} info 当前拖拽的节点  
   */  
  onDragStart(e, info) {
    const { onDragStart = empty } = this.props;
    onDragStart(info);
    this.setState({  
      isDraging: true,  
      dragItem: info,  
    });
  }  

  /**  
   * 当前分组是否展开  
   * @param {*} key 节点 id  
   * @returns  
   */  
  isExpanded(key) {
    const { expandedKeys = [] } = this.state;  
    return expandedKeys.indexOf(key) >= 0;
  }  

  /**  
   * 渲染拖曳事件的放置区域  
   * @param {*} deep 当前层级 便于缩进形成树形结构  
   * @param {*} data 当前节点  
   * @param {*} location 节点相对位置  
   * @returns  
   */  
  renderDragArea(deep, data, location) {
    const { isDraging, dragItem } = this.state;
    const { parent } = dragItem || {};  
    const {  
      canFileAddAhead = true,  
      canDirAddBehind = true,  
      type: dataType,  
    } = data;  
    const isCan =  
      (location === 'before' && canFileAddAhead) ||  
      (location === 'after' && canDirAddBehind);  
    const isCanDrop = isDraging && isCan;  

    return (  
      <li  
        style={{  
          marginLeft: deep * 15 + 5,  
        }}  
        className="rpa-tree-area"  
      >  
        <IfElse condition={!!isCanDrop}>  
          <p  
            onDragOver={(e) => e.preventDefault()}  
            onDragEnter={(e) => this.onAreaDragEnter(e)}  
            onDragLeave={(e) => this.onAreaDragLeave(e)}  
            onDrop={(e) => this.onAreaDrop(e, data, location)}  
          />  
        </IfElse>  
      </li>  
    );
  }  

  // 输入框失焦  
  onInputBlur(e, data) {
    
  }  

  onInputChange(v, { type, name }) {
    
  }  

  // 搜索框  
  onSearchChange = (v) => {
    const { _dataSource, defaultExpandedKeys} = this.state; 
    if (!v) {
      return this.setState({  
        dataSource: handleDataSource(_dataSource),
        expandedKeys: defaultExpandedKeys,  
      });
    }  

    const { data: _d, keys: _k } = handle([..._dataSource]); 
    console.log(handle([..._dataSource])) 
    this.setState({  
      dataSource: handleDataSource(_d),  
      expandedKeys: _k,  
      clickItem: null,  
    });  

    function handle(array = [], data = [], keys = []) {
      for (let i = 0; i < array.length; i++) {
        const element = { ...array[i] };  
        // 搜索命中分组  
        if (element.label.indexOf(v) >= 0) {
          data.push(element); 
          keys.push(element.value); 
          continue;
        }  
        // 处理子节点  
        if (element.children) {
          const { data: _data, keys: _keys } = handle(element.children);  
          if (0 in _data) {
            // 命中子节点
            element.children = _data;  
            keys.push(..._keys, element.value);
          } else {
            // 未命中子节点  
            element.children = [];
          }
        }  

        if (  
          (element.children && 0 in element.children) ||
          element.label.indexOf(v) >= 0  
        ) {
          data.push(element); 
        }
      }  
      return { data, keys };
    }
  };  

  renderChildren(data = [], deep = 0) {
    return (  
      <ul className="rpa-tree-item">  
        {data.map((item, index) => {
          const {  
            value,  
            label = '',  
            type,  
            children = [],  
            status: itemStatus,  
            canDragging = true,  
            canDirAddInside = true,  
            canFileAddInside = true,  
          } = item;  
          const { dragItem, clickItem, status, isDraging, inputState } =  
            this.state;  
          // 分组展开  
          const isExp = this.isExpanded(value);  
          // 目录标题可以放置  
          const dropFun = ternaryOperator(  
            [  
              isDraging,  
              canDirAddInside || canFileAddInside 
            ],  
            {  
              onDragOver: (e) => e.preventDefault(),  
              onDrop: (e) => this.onAreaDrop(e, item, 'inside'),  
            }  
          );  
          // 可放置条件  
          const draggable = canDragging && !status;  
          const contentClass = cx('rpa-tree-title-content', {  
            'title-is-click': clickItem?.name === name && !itemStatus,  
            'title-is-editing': itemStatus,  
          });  
          return (  
            <React.Fragment key={value}>  
              {this.renderDragArea(deep, item, 'before')}  
              <li>  
                <div  
                  className="rpa-tree-title"  
                  onClick={() => this.onTitleClick(item)}  
                  onDoubleClick={() => this.onTitleDoubleClick(item)}  
                  style={{ paddingLeft: deep * 15 }}  
                  onDragEnter={(e) => this.onTitleDragEnter(e, item)}  
                  {...dropFun}  
                >  
                  <div  
                    draggable={draggable}  
                    className={contentClass}  
                    onDragStart={(e) => draggable && this.onDragStart(e, item)}  
                  >  
                    {children.length !== 0 && <Icon size="small" type="arrow-right" />}
                    
                    <IfElse condition={!!itemStatus}>  
                      <IfElse.If>  
                        <Input  
                          autoFocus  
                          spellCheck="false"  
                          size="small"  
                          style={{ width: '100%' }}  
                          state={inputState}  
                          defaultValue={label}  
                          onBlur={(e) => this.onInputBlur(e, item)}  
                          onPressEnter={(e) => this.onInputBlur(e, item)}  
                          onChange={(v) => this.onInputChange(v, item)}  
                        />  
                      </IfElse.If>  
                      <IfElse.Else>  
                        <p  
                          className="ellipsis g-fs-12 rpa-tree-display-name"  
                          title={label}  
                        >  
                          {label}  
                        </p>  
                      </IfElse.Else>  
                    </IfElse>  
                  </div>  
                </div>  
                <IfElse condition={!!isExp}>  
                  {this.renderChildren(children, deep + 1)}  
                </IfElse>  
              </li>  
              <IfElse condition={index === data.length - 1}>  
                {this.renderDragArea(deep, item, 'after')}  
              </IfElse>  
            </React.Fragment>  
          );
        })}  
      </ul>  
    );
  }  

  render() {
    const { dataSource, clickItem } = this.state;  
    const { className, style, showSearch } = this.props;

    const _className = cx(className, 'rpa-tree-wrap');  
    return (  
      <div className={_className} style={style}>  
        <div  
          style={{ height: '100%' }}  
          onMouseLeave={() => this.setState({ isDraging: false })}  
        >  
          {showSearch && 
          <Input
            style={{width: '100%'}}
            innerBefore={<Icon type="search" style={{ margin: 4 }} onClick={this.onClick} />}
            onChange={this.onSearchChange}
          />} 
          <div className="g-p-lr-16 flow-tree-wrap webkit-scrollbar">  
            {this.renderChildren(dataSource)}  
          </div>  
        </div>  

      </div>  
    );
  }
}  
export default Tree;
