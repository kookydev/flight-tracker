
import React, { Component } from "react";

import "./App.css";
// import FlightMap from "./components/FlightMap/FlightMap";
// import SearchBar from "./components/SearchBar/SearchBar"; Waiting to be made
import SearchResultList from "./components/SearchResultList/SearchResultList";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import Planes from "./components/Planes/Planes";
import InfoCard from "./components/InfoCard/InfoCard";

class App extends Component {
  state = {
    airportData: {
      iata: "",
      name: "",
      location: ""
    },
    showResults: false,
    searchResults: {
      arrivals: [],
      departures: []
    }
  };

  inputHandler = searchString => {

    let options = {
      url: `https://v4p4sz5ijk.execute-api.us-east-1.amazonaws.com/anbdata/airports/locations/operational-list?api_key=ff258a50-4c91-11e9-95d2-fd99eb1d4f66&airports=${searchString}&states=&format=json`,
      json: true
    };
    axios.get(options.url)
      .then(res => {
        console.log(res)

        this.setState({
          airportData: {
            iata: res.data[0].iatacode,
            name: res.data[0].airportName,
            location: res.data[0].countryCode
          }
        })
        let startTime = Math.round((new Date).getTime() / 1000)
        let endTime = startTime + 7200
        console.log(`start: ${startTime}, end:${endTime}`)
        axios.get(`https://opensky-network.org/api/flights/arrival?airport=${res.data[0].airportCode}&begin=${startTime-80000}&end=${endTime-80000}`).then(res => {
          console.log(res)
          this.setState({
            searchResults: {
              arrivals: res.data
            }
          })
        })
        axios.get(`https://opensky-network.org/api/flights/departure?airport=${res.data[0].airportCode}&begin=${startTime-80000}&end=${endTime-80000}`).then(res => {
          console.log(res)
          this.setState({
            searchResults: {
              departures: res.data
            }
          })
        })




        // console.log(this.state)

      })
      .catch(err => console.log(err));
  };

  planeDataHandler = (latmin, longmin, latmax, longmax) => {
    let url = `https://opensky-network.org/api/states/all?lamin=${latmin}&lomin=${longmin}&lamax=${latmax}&lomax=${longmax}`;
    axios
      .get(url)
      .then(res => {
        this.setState({ planeData: res.states });
      })
      .catch(err => console.log(err));
  };




  render() {
    return ( <
      div className = "container" >
      <
      InfoCard flightID = "EZY3001"
      departure = "MCR"
      arrival = "AMS"
      departureTime = "15:20"
      arrivalTime = "16:20"
      speed = "216"
      altitude = "3166"
      track = "270" / >
      <
      div className = "content" / >
      <
      div className = "footer" >
      <
      SearchBar func = {
        this.inputHandler
      }
      /> <
      SearchResultList airportData = {
        this.state.airportData
      }
      /> < /
      div > <
      /div>

    );
  }
}

export default App;