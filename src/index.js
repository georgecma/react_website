import React from 'react'
import ReactDOM from 'react-dom'
import TitleComponent from "./components/title-component.js"
import PropTypes from 'prop-types'


class App extends React.Component {
	constructor (props) {
		super (props) 
		// Initial state 
		this.state = {
			title: 'hello who dis'
		}

//		// Bind functions 
//		this.changeState.bind(this)
	}

	changeName () {
		this.setState({ title:'second hello!'})
	}

	render () {
		return (
			<>
				<TitleComponent title={this.state.title}/> 
				<button onClick = {this.changeName.bind(this)}> Toggle </button>
			</>
		)
	}
}

ReactDOM.render (<App/>, document.getElementById('root'));