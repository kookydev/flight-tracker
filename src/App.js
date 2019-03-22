import React, {
  Component
} from 'react';
import Planes from "./components/Planes/Planes"
import './App.css';

class App extends Component {
  render() {
    return ( <
      div className = "container" >
      <
      div className = "content" / >
      <
      div className = "footer" >
      <
      SearchBar func = {
        this.inputHandler
      }
      /> <
      SearchResultList flightData = {
        this.state.flightData
      }
      /> < /
      div > <
      /div>
    );
  }
}

export default App;