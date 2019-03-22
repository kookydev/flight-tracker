import React from "react";
import "./AirportInfo.css";

const AirportInfo = props => (
  <div className="container">
    <div className="airport-info">
      <h1 className="airport-iata">{props.airportData.iata}</h1>
      <div className="airport-data">
        <h2 className="airport-name">{props.airportData.name}</h2>
        <h2 className="airport-location">{props.airportData.location}</h2>
      </div>
    </div>
  </div>
)

export default AirportInfo;