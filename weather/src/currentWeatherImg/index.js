import React, { Component } from 'react'
import './icons.css'
import { connect } from 'react-redux';

// rain, drizzle, thunderstorm

// DONE: clouds, clear, atmosphere, snow, rain, drizzle,

class Icons extends Component {

  renderWeatherIconsSwitch = () => {

    switch (this.props.weatherType) {
      case 'Clouds' || 'Atmosphere':
        return (
          <div class="icon cloudy">
            <div class="cloud"></div>
            <div class="cloud"></div>
          </div>
        )
      case 'Clear':
        return (
          <div class="icon sunny">
            <div class="sun">
              <div class="rays"></div>
            </div>
          </div>
        )
      case 'Snow':
        return (
          <div class="icon flurries">
            <div class="cloud"></div>
            <div class="snow">
              <div class="flake"></div>
              <div class="flake"></div>
            </div>
          </div>
        )
      case 'Rain' || 'Drizzle':
        return (
          <div class="icon rainy">
            <div class="cloud"></div>
            <div class="rain"></div>
          </div>
        )
      case 'Thunderstorm':
        return (
          <div class="icon thunder-storm">
            <div class="cloud"></div>
            <div class="lightning">
              <div class="bolt"></div>
              <div class="bolt"></div>
            </div>
          </div>
        )
      default:
          return ('')
    }
  }

  render () {
    return (
      <div>
        {this.renderWeatherIconsSwitch()}
      </div>
    )
  }
}

const mapDispatchToProps = () => {
  return {}
}

const mapStateToProps = (state) => {
  return {
    weatherType: state.weather ? state.weather.weather[0].main : ''
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Icons)