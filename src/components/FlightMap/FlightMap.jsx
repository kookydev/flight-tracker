import React, { Component } from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import './FlightMap'

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiY29ubm9ycm9vbmV5IiwiYSI6ImNqdGs3MnF1bTAwcWY0NHBmMXljdjd3a2kifQ.2iRpk-A_6CGkL7DQjk3Kjg"
});


class FlightMap extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }

  render() {

    return (
      <div className="flightMapCont">
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}
          center={[-2.8931, 53.1934]}        >
        </Map>
      </div>
    );
  }
}
 
export default FlightMap;
