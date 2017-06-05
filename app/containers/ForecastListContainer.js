import React, { Component } from 'react';
import { connect } from 'react-redux';

class ForecastListContainer extends Component {

  	renderWeather(dayData) {
	    const date = dayData.date;
	    const min = dayData.mintempC;
	    const max = dayData.maxtempC;
	    return (
	      	<li key={date}>
	          	<div>Date: {date}</div>
	          	<div>Min temp: {min} °C <span className="float-right">Max temp: {max} °C</span></div>
	      	</li>
	    )
  	}

  	render() {
	    if (this.props.response.length === 0) {
	      	return (<div></div>);
	    }else if (this.props.response[0].data.error){
	    	return (<div>City not found</div>);
	    } else {
	      	return (
	      		<ul>{this.props.response[0].data.weather.map(this.renderWeather)}</ul>
	    	);
  		}
  	}
}

function mapToStateProps(state) {
  	return { response: state.forecast };
}

export default connect(mapToStateProps)(ForecastListContainer);
