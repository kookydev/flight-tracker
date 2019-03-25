import React, { Component } from "react";
import("./Planes.css");

class Planes extends Component {
  state = {
    track: this.props.track,
    callsign: this.props.callsign,
    height: this.props.planeHeight
  };

  

  render() {
    let planeRotate = this.state.track - 90;

    return (
      <div>
        <i
          className="fas fa-plane plane"
          style={{ transform: `rotate(${planeRotate}deg) scale(1.4)` }}
        />
        <p className="plane-details">{this.state.callsign}</p>
        <p className="plane-details">{this.state.height}</p>
      </div>
    );
  }
}

export default Planes;
