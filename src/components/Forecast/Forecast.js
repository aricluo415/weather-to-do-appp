import React from "react";
import {
  Card,
  CardTitle,
} from "reactstrap";
import "./Forecast.css";
import WeatherImage from "../WeatherImage.js/WeatherImage.js";
import { suns, moons1, tornados, snowflake, cloudy } from "../../api/pics";
function Forecast({
  weather = { is_day: 1, temp_f: 61 },
  today = { name: "n/a" }
}) {
  let imgs = suns;
  if (weather.is_day === 0) {
    imgs = moons1;
  } else if (weather.temp_f > 60 && weather.is_day === 1) {
    imgs = suns;
  } else {
    imgs = cloudy;
  }

  return (
    <Card className="location">
      <CardTitle className="temp">
        {weather.temp_f}° F <small>| {weather.condition.text}</small>
      </CardTitle>
      <WeatherImage weatherImg={imgs} />
      <CardTitle className="updated">
        last update:{weather.last_updated}
        {`  `}
        {today.name}
      </CardTitle>
    </Card>
  );
}

export default Forecast;
