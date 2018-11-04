export const saveCurrentWeatherData = (weatherData) => ({
  type: 'SAVE_WEATHER',
  weatherData
});

// export const saveUserLocationCoordinates = (coordinates) => ({
//   type: 'SAVE_USER_LOCATION',
//   coordinates
// });

export const saveUserLocationLat = (lat) => ({
  type: 'SAVE_USER_LAT',
  lat
});

export const saveUserLocationLong = (long) => ({
  type: 'SAVE_USER_LONG',
  long
});

