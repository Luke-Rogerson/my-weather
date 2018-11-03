import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './currentWeather';

class App extends Component {
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

export default App;
