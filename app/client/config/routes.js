import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
var ReactRouter = require('react-router');

import Main from '../Components/Main';
import Home from '../Components/Home';
import Weather from '../Components/Weather';
import Nav from '../Components/Nav';
import WeatherData from '../Components/WeatherData';
// import Home from '../Components/Home';
import DetailedWeather from '../Components/DetailedWeather'



var routes = (
<Router history={browserHistory}>
	
	<Route path='/' component={Main}>
	<IndexRoute component={WeatherData}/>

	<Route path='DetailedWeather/:location' component={DetailedWeather}/>

	</Route>
	
</Router>
)

export default routes
	// <Route path='/' component={Main}/>