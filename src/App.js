import React, {
  Component
} from 'react';
import Planes from "./components/Planes/Planes"
import './App.css';
import SearchResult from './components/SearchResult/SearchResult';

class App extends Component {
  render() {
    return ( 
      <SearchResult />
    );
  }
}

export default App;