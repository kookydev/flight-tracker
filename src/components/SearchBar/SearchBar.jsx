import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.func(this.state.value);
  };

  render() {
    return (
      <form className="footer" onSubmit={this.handleSubmit}>
        <button className="search-btn" type="submit" value="submit">
          <i className="fas fa-search fa-4x" />
        </button>
        <input
          className="search-input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search..."
        />
      </form>
    );
  }
}

export default SearchBar;
