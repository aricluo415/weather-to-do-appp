import React, { useState, useEffect } from "react";
import WeatherApi from "../../api/weatherApi";
import FactApi from "../../api/FactApi";
import Forecast from "../../components/Forecast/Forecast";
import RandomFact from "../RandomFact/RandomFact";
import { Col, Row } from "reactstrap";
import "./Weather.css";

function Weather() {
  const [location] = useState("London");
  const [weather, setWeather] = useState(null);
  const [today, setToday] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [time, setTime] = useState("");
  const [fact, setFact] = useState("");
  useEffect(
    function currentWeatherAndDate() {
      async function getTodaysWeather() {
        const resp = await WeatherApi.getCurrentWeather(location).then(
          (resp) => {
            console.log(resp.current);
            setTime(resp.current.is_day === 1 ? "day" : "night");
            setWeather(resp.current);
            setToday(resp.location);
          }
        );

        setLoading(false);
      }
      async function getTodaysFact() {
        const resp = await FactApi.getTodaysFact().then((resp) => {
          setFact(resp);
        });
      }
      getTodaysFact();
      getTodaysWeather();
    },
    [location]
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <Row className={`weather ${time}`}>
      <Col sm={6} className={time}>
        <Forecast weather={weather} today={today} />
      </Col>
      <Col sm={6} className={time}>
        <RandomFact fact={fact} />
      </Col>
    </Row>
  );
}

export default Weather;
