import {Map} from 'immutable';

const weatherData = (state = {}, action) => {
  switch (action.type) {
    case ('SAVE_USER_LAT'):
      return ({...state, lat: action.lat});
    case ('SAVE_USER_LONG'):
      return ({...state, long: action.long});
     case ('SAVE_WEATHER'):
       return ({...state, weather: action.weatherData});
    default:
      return state;
  }
}

export default weatherData;