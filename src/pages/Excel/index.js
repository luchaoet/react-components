import React from 'react'
import keyboardShortcut from '../../components/keyboardShortcut'
import { Switch, Excel } from '@/components'
import { Button } from '@alifd/next'

// @keyboardShortcut()
export default class ExcelCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: 'A',
      dataSource: {
        1: {
          A: {format: 'string', value: 'A1'},
          B: {format: 'string', value: 'B1'},
          C: {format: 'string', value: 'C1'},
          D: {format: 'string', value: 'D1'},
          E: {format: 'string', value: 'E1'},
        },
        2: {
          A: {format: 'string', value: 'A2'},
          B: {format: 'string', value: 'B2'},
          C: {format: 'string', value: 'C2'},
          D: {format: 'string', value: 'D2'},
          E: {format: 'string', value: 'E2'},
        },
        100: {
          DD: {format: 'string', value: 'DD100'},
        }
      },
    }
  }

  setExpression(v) {
    this.setState({
      expression: v,
      dataSource: {}
    })
  }

  render() {
    const {expression, dataSource } = this.state;
    const styles = {
      A: {
        width: '100%', height: 400
      },
      B: {width: '50%', height: 300},
      C: {position: 'fixed', top: 54, right: 0, bottom: 0, left: 0}
    }
    return (
      <>
        <div>
          <Button onClick={() => this.setExpression('A')}>A</Button>
          <Button onClick={() => this.setExpression('B')}>B</Button>
          <Button onClick={() => this.setExpression('C')}>C</Button>
          <Button onClick={() => {
					  this.excelRef.__wrappedInstance.setState({
					    styles: {cursor: 'pointer'}
					  })
          }}
          >set
          </Button>
        </div>

        <Switch expression={expression}>
          <div case="A">A</div>
          <div case="B">B</div>
          <div case="C">C</div>
        </Switch>

        <div style={styles[expression]}>
          <Excel
            ref={(c) => {
              this.excelRef = c;
            }}
            dataSource={dataSource}
            columnNames={['哈哈哈哈哈哈哈哈哈', '嘿嘿', '哟哟哟哟哟哟']}
            cellWidth={100}
            cellHeight={30}
          />
        </div>

        <div style={{height: 300}} />
      </>
    )
  }
}