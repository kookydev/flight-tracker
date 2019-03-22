import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="container">
        <i className="fas fa-search"></i>
      </div>
    );
  }
}
 
export default SearchBar;