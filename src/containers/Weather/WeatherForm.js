import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

function WeatherForm({ snacks, drinks }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    getTodaysWeather(formData);
  }

  const [formData, setFormData] = useState({
    location: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value
    }));
  }
  // end

  return (
    <div>
      <h1>Change your location!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">location:</label>
        <input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <button>Get todays weather!</button>
      </form>
    </div>
  );
}
// end

export default WeatherForm;
