import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './currentWeather';
import { saveCurrentWeatherData } from './redux/actions';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weather : []
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

  render() {
    return (
      <div className="container">
      <h1>MY WEATHER!</h1>
      <CurrentWeather />
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
