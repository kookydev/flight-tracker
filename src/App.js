import React, {
  Component
} from 'react';
import Planes from "./components/Planes/Planes"
import FlightMap from "./components/FlightMap/FlightMap"
import './App.css';

class App extends Component {
  render() {
    let hi = "Hi"
    return ( 
      <div>
        <h1>{hi}</h1>
        <FlightMap />
      </div>
    );
  }
}

export default App;