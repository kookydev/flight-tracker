import React, {
  Component
} from 'react';
import Planes from "./components/Planes/Planes"
import FlightMap from "./components/FlightMap/FlightMap"
import './App.css';

class App extends Component {
  render() {
    return ( 
      <div>
        <FlightMap />
      </div>
    );
  }
}

export default App;