import React from 'react'
import keyboardShortcut from '../../components/keyboardShortcut'
import Home from '../Home'

@keyboardShortcut()
export default class Test2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	onkeydown() {
		return {
			a: () => {
				console.log('a')
			},
			copy: () => {
				console.log('copy')
			}
		}
	}

	render() {
		return(
			<div>
				<div>111</div>
				<div>222</div>
				<div>333</div>
				<div>444</div>
				<div>555</div>
				<div>666</div>
				<div>777</div>
				<div>888</div>
				{/* <Home /> */}
			</div>
		)
	}
}