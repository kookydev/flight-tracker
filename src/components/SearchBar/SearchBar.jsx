import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {
    // debugger;
    this.props.func(this.state.value);
  };

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <button type="submit" value="submit">
          <i className="fas fa-search fa-5x" />
        </button>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBar;
