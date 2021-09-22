import React from 'react'
import keyboardShortcut from '../../components/keyboardShortcut'
import { Switch, Excel } from '@/components'
import { Button } from '@alifd/next'

// @keyboardShortcut()
export default class ExcelCom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expression: 'A'
		}
	}

	setExpression(v) {
		this.setState({
			expression: v
		})
	}

	render() {
		const {expression } = this.state;
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
        <Excel style={{background: 'red'}} cellWidth={100} cellHeight={30} />
      </div>

      <div style={{height: 300}}></div>
			</>
		)
	}
}