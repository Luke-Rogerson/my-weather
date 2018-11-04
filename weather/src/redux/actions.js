export const saveCurrentWeatherData = (weatherData) => ({
  type: 'SAVE_WEATHER',
  weatherData
});

export const getUserLocationCoordinates = (coordinates) => ({
  type: 'GET_USER_LOCATION',
  coordinates
})
