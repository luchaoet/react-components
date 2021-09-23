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
			dataSource: [
				['dataSourcedataSourcedataSource', 'B1', 'C1', 'D1', 'E1'],
				['A2', 'B2', 'C2', 'D2', 'E2'],
				['A3', 'B3', 'C3', 'D3', 'E3'],
				['A4', 'B4', 'C4', 'D4', 'E4'],
				['A5', 'B5', 'C5', 'D5', 'E5'],
			  ],
		}
	}

	setExpression(v) {
		this.setState({
			expression: v,
			dataSource: [
				['A1']
			]
		})
	}

	render() {
		const {expression, dataSource } = this.state;
		const styles = {
			A: {
				width: '100%', height: 400
			},
			B: {width: '50%',height: 300},
			C: {position: 'fixed', top: 54, right:0, bottom: 0, left: 0}
		}
		return(
			<>
			<div>
        <Button onClick={() => this.setExpression('A')}>A</Button>
        <Button onClick={() => this.setExpression('B')}>B</Button>
        <Button onClick={() => this.setExpression('C')}>C</Button>
      </div>

			<Switch expression={expression}>
        <div case='A'>A</div>
        <div case='B'>B</div>
        <div case='C'>C</div>
      </Switch>

      <div style={styles[expression]}>
        <Excel dataSource={dataSource} style={{background: 'red'}} cellWidth={100} cellHeight={30} />
      </div>

      <div style={{height: 300}}></div>
			</>
		)
	}
}