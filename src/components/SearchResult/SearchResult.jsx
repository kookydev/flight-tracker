import React from "react";
import "./SearchResult.css";

const SearchResult = props => {
  return (
    <>
      <span className="carrier">{props.carrier}</span>
      <span className="flight">{props.flight}</span>
      <span className="destination">{props.destination}</span>
      <span className="departure">{props.departure}</span>
    </>
  );
};

export default SearchResult;
