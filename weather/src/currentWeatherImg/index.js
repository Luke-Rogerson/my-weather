import React, { Component } from 'react'
import { connect } from 'react-redux';
import './icons.css'

class Icons extends Component {

  renderWeatherIconsSwitch = () => {

    switch (this.props.weatherType) {
      case 'Clouds' || 'Atmosphere':
        return (
          <div className="icon cloudy">
            <div className="cloud"></div>
            <div className="cloud"></div>
          </div>
        )
      case 'Clear':
        return (
          <div className="icon sunny">
            <div className="sun">
              <div className="rays"></div>
            </div>
          </div>
        )
      case 'Snow':
        return (
          <div className="icon flurries">
            <div className="cloud"></div>
            <div className="snow">
              <div className="flake"></div>
              <div className="flake"></div>
            </div>
          </div>
        )
      case 'Rain' || 'Drizzle':
        return (
          <div className="icon rainy">
            <div className="cloud"></div>
            <div className="rain"></div>
          </div>
        )
      case 'Thunderstorm':
        return (
          <div className="icon thunder-storm">
            <div className="cloud"></div>
            <div className="lightning">
              <div className="bolt"></div>
              <div className="bolt"></div>
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