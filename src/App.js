<<<<<<< HEAD
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
      planes / >
      <
      /div>
=======
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import FlightMap from "./components/FlightMap/FlightMap";
// import SearchBar from "./components/SearchBar/SearchBar"; Waiting to be made
import SearchResultList from "./components/SearchResultList/SearchResultList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="content">
          {/* <Route path="/" exact component={} /> */}
          <Route exact path="/" component={FlightMap} />
          <Route path="/results" component={SearchResultList} />
        </div>
        <div className="footer">
          <Link to="/" className="nav-link">
            Testing
          </Link>
          {/* Info can be changed to whatever using as a test */}
          <Link to="/results" className="nav-link">
            ge
          </Link>
        </div>
      </Router>
>>>>>>> master
    );
  }
}

export default App;