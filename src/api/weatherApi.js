import React from "react";
import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "538c6e106edb4105936175522202311";
class WeatherApi {
  static async getCurrentWeather(location) {
    let resp = await axios.get(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`
    );
    console.log(resp);
    return resp.data;
  }
  static async weatherForecast(location) {
    let resp = await axios.get(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${location}&days=7`
    );
    return resp.data;
  }
}
export default WeatherApi;
