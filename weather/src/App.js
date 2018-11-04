import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './currentWeather';
import { saveCurrentWeatherData } from './redux/actions';
import { connect } from 'react-redux';
import { saveUserLocationLat } from './redux/actions';
import { saveUserLocationLong } from './redux/actions';

const API_ADDRESS = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = 'ef20e7b5004420630329030aaf63d131';
// https://api.openweathermap.org/data/2.5/weather?lat=41.39496460000001&lon=2.1975748999999998&appid=ef20e7b5004420630329030aaf63d131'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: []
    }
  }

  componentDidMount = () => {
    this.fetchWeather();
    this.getUserLocation();
  }

  fetchWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.39496460000001&lon=2.1975748999999998&appid=ef20e7b5004420630329030aaf63d131&units=metric')
      .then(
        response => response.json())
      .then(
        data => this.props.saveCurrentWeatherData(data))
  }

  getUserLocation = async () => {
    const geolocation = navigator.geolocation;
    await new Promise((resolve, reject) => {
      if (!geolocation) {
        reject(new Error('No location data'));
      }
      geolocation.getCurrentPosition((position) => {
        resolve(position);
      }, () => {
        reject(new Error('Permission denied'));
      });
    }).then(
      data => {
        console.log(data)
        this.props.saveUserLocationLat(data.coords.latitude)
        this.props.saveUserLocationLong(data.coords.longitude)
      })
  }

  render () {
    return (
      <div className="container">
        <h1>YOUR WEATHER!</h1>
        <CurrentWeather />
        <h3>{this.state && this.state.location ? JSON.stringify(this.state.location) : 'No data yet'}</h3>
        <p>Designed by Luke Rogerson.</p>
      </div>
    );
  }
}


const mapStateToProps = () => {
  return {};
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