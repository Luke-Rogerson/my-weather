import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCurrentWeatherData } from '../redux/actions';

const API_ADDRESS = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = 'ef20e7b5004420630329030aaf63d131';

// https://api.openweathermap.org/data/2.5/weather?lat=41.39496460000001&lon=2.1975748999999998&appid=ef20e7b5004420630329030aaf63d131'

class CurrentWeather extends Component {

  render () {
    return (
      <div>
        <div><p>You are in <b>{this.props.location}</b>.</p></div>
        <div><p>It's currently {this.props.temperature}°C.</p></div>
        <div><p><b>{this.props.weather}</b></p></div>
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