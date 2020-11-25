import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

function WeatherForm({ snacks, drinks }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    if (snacks) {
      newSnack();
      return <Redirect to="/snacks" />;
    }
    if (drinks) {
      newDrinks();
      return <Redirect to="/drinks" />;
    }
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
      <h1>Add your new menu item!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name:</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <button>Get todays weather!</button>
      </form>
    </div>
  );
}
// end

export default WeatherForm;
