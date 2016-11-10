var React = require('react')
var ReactDOM = require('react-dom')
var DetailedWeather = require ('../Components/DetailedWeather');
import { Button, FormGroup, ControlLabel, FormControl, Form, HelpBlock, Col, PageHeader, ButtonToolbar, OverlayTrigger, Tooltip} from 'react-bootstrap';

const DetailedWeatherUI = (props) => (


	// console.log('props in DetailedWeatherUI',props)

	<div>
	<h1>{props.cityName}</h1>

	<div className="data">
	{props.list.map((city,i) => (
		<div style={{display: 'inline-block', margin: '100px',fontFamily: 'arial', fontSize: '20px'}} className='yo' key={i}>
	<span style={{fontFamily: 'arial', fontSize: '20px'}}>{city.day} {city.weather[0].description} {city.humidity}</span>
	<img className='image' style={{marginLeft: '10px'}} src='http://resource.everyday.mn//everyday/images/2014/8/2ec435f233dc753736b2db8271dfbc1c/1eogqv4cusekrjdcmrg9otvf0s.jpg'>
	</img>
	</div>
	
	
	
	

		)
	)}
	
	</div>

	</div>




)

var divStyles = {
  'color': 'black',
  'fontFamily': 'sans-serif',
  'display': 'flex',
  'justify-content': 'center',
  'flex-direction':'column',
  'align-text': 'center',
  'padding': '5px',
  'margin': '5px'
}
export default DetailedWeatherUI