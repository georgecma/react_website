import React from 'react'
import ReactDOM from 'react-dom'
import TitleComponent from "./components/title-component.js"
import TimerComponent from "./components/timer-component.js"
import PropTypes from 'prop-types'


class App extends React.Component {
	constructor (props) {
		super (props) 
		// Initial state 
		this.state = {
			title: 'hello who dis'
		}

//		// Bind functions 
		this.changeName = this.changeName.bind(this)
	}

	changeName () {
		this.setState({ title:'second hello!'})
	}

	render () {
		return (
			<>
				<TitleComponent title={this.state.title}/> 
				<button onClick={this.changeName}> Toggle </button>

				<TimerComponent/>
			</>
		)
	}
}

ReactDOM.render (<App/>, document.getElementById('react-app'));