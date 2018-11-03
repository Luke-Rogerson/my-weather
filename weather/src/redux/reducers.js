const weatherData = (state = {weather : []}, action) => {

  switch (action.type) {
    case ('SAVE_WEATHER'):
      return ({...state, weather: action.weatherData});
    default:
      return state;
  }
}

export default weatherData;