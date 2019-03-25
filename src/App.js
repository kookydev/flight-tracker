import React, { Component } from "react";

import "./App.css";
import FlightMap from "./components/FlightMap/FlightMap";
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
    planeData: [],
    showResults: false,
    currentPlane: {
      callsign: "",
      origin: "",
      speed: "",
      track: "",
      alt: "",
    }
  };

  inputHandler = searchString => {
    let options = {
      url: `https://v4p4sz5ijk.execute-api.us-east-1.amazonaws.com/anbdata/airports/locations/operational-list?api_key=ff258a50-4c91-11e9-95d2-fd99eb1d4f66&airports=${searchString}&states=&format=json`,
      json: true
    };
    axios
      .get(options.url)
      .then(res => {
        console.log(res);

        this.setState({
          flightData: {
            iata: res.data[0].iatacode,
            name: res.data[0].airportName,
            location: res.data[0].countryCode
          },
          showResults: true
        });
      })
      .catch(err => console.log(err));
  };

  planeDataHandler = (latmin, longmin, latmax, longmax) => {
    let url = `https://opensky-network.org/api/states/all?lamin=${latmin}&lomin=${longmin}&lamax=${latmax}&lomax=${longmax}`;
    axios.get(url).then(res => {
      this.setState({ planeData: res.data.states });
    })
    .catch(err => console.log(err));
  };

  clickHandler = (selectedPlane) => {
    let callsign = selectedPlane[1]
    this.state.planeData.forEach(plane => {
      if (plane[1] === callsign) {
        this.setState({ currentPlane: selectedPlane})
      }
    })
    // this.setState({ currentPlane: {
    //   callsign: this.state.planeData[i][1], 
    //   origin: this.state.planeData[i][2], 
    //   speed: this.state.planeData[i][9],
    //   track: this.state.planeData[i][10],
    //   alt: this.state.planeData[i][13],
    // }
    // })
  }

  componentDidMount() {
    this.planeDataHandler('49.959999905', '-7.57216793459', '58.6350001085', '1.68153079591')
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    const { currentPlane } = this.state
    return (
      <div className="container">
        <FlightMap data={this.state.planeData} clickHandler={this.clickHandler}/>
        <InfoCard
          currentPlane={currentPlane}
        />
        <div className="content" />
        <div className="footer">
          <SearchBar func={this.inputHandler} />
          <SearchResultList airportData={this.state.airportData} />
        </div>
      </div>
    );
  }
}

export default App;
