import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCurrentWeatherData } from '../redux/actions';
import './style.css';


class CurrentWeather extends Component {

  render () {
    return (
      <div className="weather-details">
        <div><h2>You are in <b>{this.props.location}</b>.</h2></div>
        <div><h2>It's currently <b>{this.props.temperature}°C</b>.</h2></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.weather ? state.weather.name : '',
    weather: state.weather ? state.weather.weather[0].main : '',
    temperature: state.weather ? state.weather.main.temp : ''
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCurrentWeatherData: (weather) => {
      dispatch(saveCurrentWeatherData(weather));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);