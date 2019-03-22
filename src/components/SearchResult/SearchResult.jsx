import React, { Component } from "react";
import SearchResultList from '../SearchResultList/SearchResultList'
import './SearchResult.css';

class SearchResult extends Component {

  render() {
    return (
      <div className="searchResultCont">
        <div className="arrivals inactive" id="arrivals">
          <h1>Arrivals</h1>
        </div>
        <div className="departures active" id="departures">
          <h1>Departures</h1>
        </div>
        <SearchResultList />
      </div>
    );
  }
}

export default SearchResult;
