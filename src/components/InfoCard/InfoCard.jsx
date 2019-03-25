import React, { Component } from 'react';
import ShortInfo from '../ShortInfo/ShortInfo'
import './InfoCard.css';

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departureTime: this.props.departureTime,
            arrivalTime: this.props.arrivalTime,

            speed: this.props.speed,
            altitude: this.props.altitude,
            track: this.props.track,

        }
    }

    speedCalc(mps) {
        let displaySpeed = Math.floor((mps * 2.237));
        return displaySpeed;
    }

    altCalc(m) {
        let displayAlt = Math.floor((m * 3.281));
        return displayAlt;
    }

    trackCalc(t) {
        let displayTrack = t - 90;
        document.getElementById("trackIcon").style.transform = `rotate(${displayTrack}deg)`
    }

    componentDidMount() {
        this.trackCalc(this.state.track)
    }

    render() { 
        return (
            <div className="infoCardCont">

                <ShortInfo departure="MCR" arrival="AMS" flightID="EZY3001"/>

                <div className="infoCardTime">
                    <div className="departureTime">
                        <h1>Departed</h1>
                        <h2>{this.state.departureTime}</h2>
                    </div>

                    <div className="arrivalTime">
                        <h1>Arrival</h1>
                        <h2>{this.state.arrivalTime}</h2>
                    </div>
                </div>

                <div className="infoCardMovement">
                    <div className="flightSpeed">
                        <h1>Speed</h1>
                        <h2>{this.speedCalc(this.state.speed)}<sub>mph</sub></h2>
                    </div>

                    <div className="flightAlt">
                        <h1>Altitude</h1>
                        <h2>{this.altCalc(this.state.altitude)}<sub>ft</sub></h2>
                    </div>
                </div>

                <div className="infoCardTrack">
                    <div className="trackString">
                        <h1>Track</h1>
                        <h2>{this.state.track}º</h2>
                    </div>

                    <div className="trackGraphicCont">
                    <i className="fas fa-plane" id="trackIcon"></i>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default InfoCard;