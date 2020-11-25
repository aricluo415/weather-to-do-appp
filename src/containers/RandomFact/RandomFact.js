import React from "react";
import "./RandomFact.css";

function RandomFact({ fact }) {
  return (
    <div className="randomFact">
      <p className = "fact">{fact}</p>
    </div>
  );
}

export default RandomFact;
