import React, {
  Component
} from 'react';
import Planes from "./components/Planes/Planes"
import './App.css';

class App extends Component {
  render() {
    return ( <
      div className = "App" >
      <
      Planes track = {
        180
      }
      callsign = "ABA1234"
      planeHeight = {
        100000
      }
      / > < /
      div >
    );
  }
}

export default App;