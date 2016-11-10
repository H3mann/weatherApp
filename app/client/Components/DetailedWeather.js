import React from 'react';
var ReactDOM = require('react-dom')
import WeatherData from '../Components/WeatherData'
import axios from 'axios';
import { Router, Route, Link, browserHistory } from 'react-router';
import Weather from '../Components/Weather'
import { render } from 'react-dom';
import DetailedWeatherUI from '../Components/DetailedWeatherUI'



const DetailedWeather = React.createClass ({

	getInitialState () {
		return { cityName: '',
						list: []
		}
	},

	getWeatherInfo (location) {
		// console.log('inside getWeatherInfo')
		 var location = this.props.params.location;
		 console.log('locationIn',location)

		axios.get ('/forecast', {
				params: {
				location: location
				}
		})
		.then (response => {
				console.log('yo',location)
			console.log('DETAILEDweatherData received', response.data);
			var cityName = response.data.city.name
			var newList = response.data.list
			var days = [{
				day: 'Day 1'},
				{day: 'Day 2'},
			  {day: 'Day 3'},
			  {day: 'Day 4'},
				{day: 'Day 5'}
			]
			var list = []
			for (var i = 0; i<newList.length; i++) {
				var items = Object.assign(newList[i], days[i]);
				list.push(items)

			}

			this.setState({
				cityName: cityName,
				list: list
			})


			console.log('list getrequest',this.state.list)


		})

		.catch (response => {
			console.log('error in weatherData', response)
		})
	},

	componentDidMount () {

			this.getWeatherInfo()
		


	},

	render () {

		console.log('State in Render',this.props.params.location)
		console.log('state list',this.state.list)
		return (

			<div>
			<h1> Weather </h1>
			<DetailedWeatherUI cityName={this.state.cityName}
			list={this.state.list}

			
			/>

			</div>	
		)


	}



})

export default DetailedWeather;