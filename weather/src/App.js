import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './currentWeather';
import { saveCurrentWeatherData } from './redux/actions';
import { connect } from 'react-redux';
import GetLocationComponent from './GetLocation';

const API_ADDRESS = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = 'ef20e7b5004420630329030aaf63d131';
// https://api.openweathermap.org/data/2.5/weather?lat=41.39496460000001&lon=2.1975748999999998&appid=ef20e7b5004420630329030aaf63d131'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      location : []
    }
  }

  componentDidMount = () => {
    this.fetchWeather();
  }

  fetchWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.39496460000001&lon=2.1975748999999998&appid=ef20e7b5004420630329030aaf63d131&units=metric')
      .then(
        response => response.json())
      .then(
        data => this.props.saveCurrentWeatherData(data))
  }

  getLocation() {
    if (navigator.geolocation) {
      this.setState({location: [navigator.geolocation()]});
    }
  }

  render() {
    return (
      <div className="container">
      <h1>YOUR WEATHER!</h1>
      <CurrentWeather />
      <GetLocationComponent />
      <p>Designed by Luke Rogerson.</p>
      </div>
      );
  }
}

const mapStateToProps = () => {
  return;
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCurrentWeatherData: (weather) => {
      dispatch(saveCurrentWeatherData(weather));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
