import React from 'react'
import PropTypes from 'prop-types'

class TitleComponent extends React.Component {
	constructor (props) {
		super (props)
	}

	render () {
		return (
		<>
			<h1> {this.props.title} </h1> 
		</>
		)
	}
}



// Enforces error checking 
TitleComponent.propTypes = {
	title:PropTypes.string.isRequired
}

export default TitleComponent 