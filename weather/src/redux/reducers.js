import {Map} from 'immutable';

const weatherData = (state = Map(), action) => {
  switch (action.type) {
    case ('GET_USER_LOCATION'):
      return ({...state, location: action.coordinates});
    case ('SAVE_WEATHER'):
      return ({...state, weather: action.weatherData});
    default:
      return state;
  }
}

export default weatherData;