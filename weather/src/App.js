import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCurrentWeatherData } from './redux/actions';
import { saveUserLocationLat } from './redux/actions';
import { saveUserLocationLong } from './redux/actions';
import './App.css';
import CurrentWeather from './currentWeather';
import CurrentWeatherIcon from './currentWeatherImg'

const API_ADDRESS = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = 'ef20e7b5004420630329030aaf63d131';

class App extends Component {

  componentDidMount = async () => {
    await this.getUserLocation();
    this.fetchWeather();
  }

  getUserLocation = async () => {
    console.log('Getting location')
    const geolocation = navigator.geolocation;
    await new Promise((resolve, reject) => {
      if (!geolocation) {
        reject(console.log('No location data'));
      }
      geolocation.getCurrentPosition((position) => {
        resolve(position);
      }, () => {
        reject(console.log('Location permission denied'));
      })
    }).then(
      data => {
        this.props.saveUserLocationLat(data.coords.latitude)
        this.props.saveUserLocationLong(data.coords.longitude)
      })
  }

  fetchWeather = () => {
    fetch(`${API_ADDRESS}lat=${this.props.lat}&lon=${this.props.long}&appid=${API_KEY}&units=metric`)
      .then(
        response => response.json())
      .catch(() => console.log('Error getting data from API'))
      .then(
        data => this.props.saveCurrentWeatherData(data))
      .catch(() => console.log('Error saving data in store'))
  }

  render () {
    return (
      this.props.lat && this.props.long ?
        <div className="container">
          <h1>YOUR WEATHER!</h1>
          <div className="weatherDisplay">
          <CurrentWeatherIcon className="container"/>
          <CurrentWeather className="container"/>
          </div>
          <p>Designed by Luke Rogerson.</p>
        </div>
        :
        <div className="container">
          <h2>Loading...</h2>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lat: state.lat ? state.lat : '',
    long: state.long ? state.long : '',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCurrentWeatherData: (weather) => {
      dispatch(saveCurrentWeatherData(weather));
    },
    saveUserLocationLat: (lat) => {
      console.log('LAT: ', lat)
      dispatch(saveUserLocationLat(lat));
    },
    saveUserLocationLong: (long) => {
      console.log('LONG: ', long)
      dispatch(saveUserLocationLong(long));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);