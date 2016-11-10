var React = require('react')
var ReactDOM = require('react-dom')
import Nav from '../Components/Nav'
import axios from 'axios';
import getWeatherInfo from '../Components/WeatherData';
import {Link} from 'react-router';

	
// getInitialState() {
// 	return {
// 		location: '',
// 		weatherInfo: []
// 	}
// },
// // contextTypes: {
// // 	router: React.PropTypes.object.isRequired
// // }

// // getInitialState: function () {
// // 	return {location:'',
// // 					weatherInfo: [],
// // 					};

// onUpdateLocation (event) {

// 	this.setState({location:event.target.value})
	
// },

// handleSubmitLocation(event) {
// 	 event.preventDefault()
// 	var location = this.state.location;
// 	this.setState({
// 		location: ''
// 	})
// 	console.log('STATE IN HANDLESUBMIT',this.state)
// 	this.getWeatherInfo(this.state.location)
// 	console.log('locationnn',this.state.location)
// 	// this.context.router.push('/detailedWeather')
// },


// //api call  to get weather data
// getWeatherInfo (location) {
// 	console.log('inside getWeatherInfo')
// 	 var location = this.state.location;
// 	 console.log('LOCATIONXXX',this.state.location)
// 	axios.get ('api/forecast', { 
// 			params: {
// 			location: location
// 			}
// 	})
// 	.then (response => {
// 		console.log('weatherData received', response.data);
// 	})

// 	.catch (response => {
// 		console.log('error in weatherData', response)
// 	})
// }

// // componentDidMount () {
// // 	this.getWeatherInfo()
// // },

		
var Weather = (props) => (
// console.log('PROPS',props)
		 
		<div>
			<Nav />

			<div className='jumbotron text-center'>
					<h1>Enter City and State</h1>
				<div className='col-md-2 center'>
					<form onSubmit={props.handleSubmitLocation}>
					<div className='form-group'>
						<input 
							className='form-control'
							placeholder='location'
							type='text'
							onChange={props.onUpdateLocation}
							value={props.location}/>
					
					<div className='text-center'>
					<Link to={'/detailedWeather/' + props.location}>
					<button className='btn btn-block btn-success center-block' type='submit'> Get Weather </button>
					</Link>
					</div>

					</div>
					</form>
				</div>

			</div>
		</div>
	
  )




export default Weather;