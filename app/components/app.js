import React, { Component } from 'react'
import SearchContainer from '../containers/SearchContainer'
import ForecastListContainer from '../containers/ForecastListContainer'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchContainer />
        <ForecastListContainer />
      </div>
    );
  }
}
