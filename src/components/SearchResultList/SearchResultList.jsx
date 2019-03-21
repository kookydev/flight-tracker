import React, { Component } from "react";
import "./SearchResultList.css";

class SearchResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="airport-info">
          <h1 className="airport-iata">{this.props.iata}</h1>
          <div className="airport-data">
            <h2 className="airport-name">{this.props.name}</h2>
            <h2 className="airport-location">{this.props.location}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultList;
