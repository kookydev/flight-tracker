import React, { Component } from "react";
import("./Planes.css");

class Planes extends Component {
  state = { track: 0, callsign: "EZY185", height: 6500 };
  render() {
    return (
      <div>
        <i class="fas fa-plane plane" />
      </div>
    );
  }
}

export default Planes;
