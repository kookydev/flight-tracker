import React, {
  Component
} from 'react';
import Planes from "./components/Planes/Planes"
import FlightMap from "./components/FlightMap/FlightMap"
import InfoCard from "./components/InfoCard/InfoCard"
import './App.css';

class App extends Component {
  render() {
    return ( 
      <div>
        <FlightMap />
        <InfoCard />
      </div>
    );
  }
}

export default App;