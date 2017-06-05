import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherForecast } from '../actions/actions';

class SearchContainer extends Component {
  	constructor(props) {
	    super(props);

	    this.state = { city: '' };
	    this.onInputChange = this.onInputChange.bind(this);
	    this.getForecast = this.getForecast.bind(this);
  	}

  	onInputChange(event) {
    	this.setState({ city: event.target.value });
  	}

  	getForecast(days, event) {
	    event.preventDefault();
	    this.props.getWeatherForecast(this.state.city, days);
  	}

  	render() {
	    return (
	    	<div>
		        <form onSubmit={this.getForecast.bind(this, 1)}>
			          <input type="text" placeholder="Enter your city" onChange={this.onInputChange} value={this.state.city} />
			          <button type="submit">Search</button>
		        </form>
		        <div className="button-list">
					<button type="button" onClick={this.getForecast.bind(this, 1)}>Today</button>
					<button type="button" onClick={this.getForecast.bind(this, 2)}>Today-Tomorrow</button>
					<button type="button" onClick={this.getForecast.bind(this, 14)}>Two weeks</button>
		        </div>
	        </div>
	    );
  	}
}

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({getWeatherForecast}, dispatch);
}

export default connect (null, mapDispatchToProps)(SearchContainer);