import React from "react";
import "./WeatherImage.css";

function WeatherImage({ weatherImg }) {
  return (
    <div className="moonContainer">
      {weatherImg.map((img, idx) => (
        <img key={img} src={img} alt={idx} className={`img${idx} img-fluid`} />
      ))}
    </div>
  );
}

export default WeatherImage;
