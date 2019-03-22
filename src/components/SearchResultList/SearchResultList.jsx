import React, { Component } from "react";
import "./SearchResultList.css";

class SearchResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iata: this.props.iata,
      name: this.props.name,
      location: this.props.location
    };
  }

  render() {
    return (
      <div className="container">
        <div className="airport-info">
          <h1 className="airport-iata">{this.state.iata}</h1>
          <div className="airport-data">
            <h2 className="airport-name">{this.state.name}</h2>
            <h2 className="airport-location">{this.state.location}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultList;
