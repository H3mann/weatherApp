var React = require('react')
var ReactDOM = require('react-dom')
import Nav from '../Components/Nav'
import Search from '../Components/Search'


var Main = React.createClass({

	render: function () {
		// console.log('thisMain',this)
		return (
			<div>
			
			{this.props.children}
			</div>
		)

	}




})

export default Main;

// api key
// 70192e65d5cec25549acf04b7fa0ada3