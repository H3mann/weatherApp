
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import axios from 'axios';
import Weather from '../Components/Weather'


const WeatherData = React.createClass({

	

	getInitialState() {
		return {
			location: '',
			weatherInfo: []
		}
	},

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	// getInitialState: function () {
	// 	return {location:'',
	// 					weatherInfo: [],
	// 					};

	onUpdateLocation (event) {

		this.setState({location:event.target.value})

	},

	handleSubmitLocation(event) {

		event.preventDefault()
		var location = this.props.location;
		var weatherInfo = this.state.weatherInfo.push(this.state.location)
		this.setState({
			location: '',
			weatherInfo: weatherInfo
		})

		// browserHistory.push(`/DetailedWeather/${this.state.location}`)
		 this.getWeatherInfo(this.state.location)
		 console.log('state',this.state)

	},


	//api call  to get weather data
	getWeatherInfo (location) {
		// console.log('inside getWeatherInfo')
		 var location = this.state.location;

		axios.get ('api/forecast', {
				params: {
				location: location
				}
		})
		.then (response => {
			console.log('weatherData received', response.data);

		})

		.catch (response => {
			console.log('error in weatherData', response)
		})
	},

	// componentDidMount () {
	// 	this.getWeatherInfo()
	// },
	render () {
	return (
		<Weather 
		onUpdateLocation={this.onUpdateLocation}
		handleSubmitLocation={this.handleSubmitLocation}
		getWeatherInfo={this.getWeatherInfo}
		location={this.state.location}
		/>
	)

	}


})

export default WeatherData











// Description:

// To get access to weather API you need an API key whatever account you chose from Free to Enterprise.

// We keep right to not to process API requests without API key.

// API call:

// http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}
// Parameters:

// APPID {APIKEY} is your unique API key 
//key: 70192e65d5cec25549acf04b7fa0ada3
// Example of API call:

// api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1111111111 
