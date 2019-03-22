import React from "react";
import "./SearchResultList.css";
import AirportInfo from "../AirportInfo/AirportInfo";

const SearchResultList = props => {
  return (
    <div className="container">
      <AirportInfo airportData={props.airportData} />
    </div>
  );
};

export default SearchResultList;
