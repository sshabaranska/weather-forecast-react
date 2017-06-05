import axios from 'axios'
const API_KEY = 'bd92842a79ae443393a124648170406'
const ROOT_URL = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${API_KEY}`;

/*
 * action types
 */
export const GET_FORECAST = 'GET_FORECAST'

/*
 * action creators
 */
export function getWeatherForecast(city, days = 1) {
  const url = `${ROOT_URL}&q=${city}&date_format=iso8601&format=json&num_of_days=${days}`;
 
  const request = axios.get(url);

  return {
    type: GET_FORECAST,
    payload: request
  }
}