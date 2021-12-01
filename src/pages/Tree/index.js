import React from 'react';
import Tree from '../../components/Tree'

const dataSource = [{
  label: 'main',
  value: 'a',
  children: [
    {
      label: 'sub1',
      value: 'b',
    }, {
      label: 'sub2',
      value: 'c',
    }
  ]
}]

export default class TreePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div style={{width: 500, padding: '0 20px', height: '100vh'}}>
        <Tree 
          defaultSelectedKeys={[]}
          defaultExpandAll
          showSearch 
          dataSource={dataSource} 
          onDragStart={(v) => console.log(v)}
        />
      </div>
    )
  }
}