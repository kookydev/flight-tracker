import React, { Component } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import { Layer, Feature, Marker} from "react-mapbox-gl";
import Planes from "../Planes/Planes"
import "./FlightMap";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiY29ubm9ycm9vbmV5IiwiYSI6ImNqdGs3MnF1bTAwcWY0NHBmMXljdjd3a2kifQ.2iRpk-A_6CGkL7DQjk3Kjg"
});

class FlightMap extends Component {
    state = {
      maxBounds: [[-7.57216793459, 49.959999905], [1.68153079591, 58.6350001085]]
    };



  render(props) {
    return (
      <div className="flightMapCont">
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "40vh",
            width: "100vw"
          }}
          center={[-2.8931, 53.1934]}

        
          maxBounds={this.state.maxBounds}
        >
        {this.props.data.map((obj, i) => {
         console.log(obj);
         return (
          <Marker
            coordinates={[obj[5], obj[6]]}
            onClick={() => this.props.clickHandler(obj)}
            >
            <Planes height={Math.floor((obj[13] * 3.281))} callsign={obj[1]} track={obj[10]}/>
          </Marker>
         );
       })}

        </Map>
      </div>
    );
  }
}

export default FlightMap;
