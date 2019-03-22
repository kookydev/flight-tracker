import React, { Component } from "react";
import "./App.css";
// import FlightMap from "./components/FlightMap/FlightMap";
// import SearchBar from "./components/SearchBar/SearchBar"; Waiting to be made
import SearchResultList from "./components/SearchResultList/SearchResultList";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios"

class App extends Component {
  state = {
    flightData: {
      iata: "",
      name: "",
      location: ""
    },
    showResults: false
  };

  inputHandler = searchString => {
    let options = {
      url: `https://v4p4sz5ijk.execute-api.us-east-1.amazonaws.com/anbdata/airports/locations/operational-list?api_key=ff258a50-4c91-11e9-95d2-fd99eb1d4f66&airports=${searchString}&states=&format=json`,
      json: true
    };
    axios.get(options.url)
    .then(res => {
      console.log(res)
      this.setState({flightData: {
        iata: res.data[0].iatacode,
        name: res.data[0].airportName,
        location: res.data[0].countryCode
      },showResults: true}); 
      console.log(this.state)
    })
  };

 

  render() {
    return (
      <div className="container">
        <div className="content" />
        <div className="footer">
          <SearchBar func={this.inputHandler} />
          <SearchResultList flightData={this.state.flightData} />
        </div>
      </div>
    );
  }
}

export default App;
