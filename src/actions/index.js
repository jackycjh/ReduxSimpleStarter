import Axios from 'axios';

const API_KEY = '4c0c226ebbbc1c892fc3adbdaf3f2e53';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},my`;
  const request = Axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}