import React, {
  Component
} from 'react';
import Planes from "./components/Planes/Planes"
import './App.css';
import InfoCard from './components/InfoCard/InfoCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfoCard flightID="EZY3001" departure="MCR" arrival="AMS" departureTime="15:20" arrivalTime="16:20" speed="216" altitude="3166" track="270"/>
      </div>
    );
  }
}

export default App;