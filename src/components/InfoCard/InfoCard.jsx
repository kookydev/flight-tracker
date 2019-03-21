import React, { Component } from 'react';
import './InfoCard.css';

class InfoCard extends Component {

    render() { 
        return (
            <div className="infoCardCont">
                <div className="infoCardHead">
                    <div className="departure">
                        <h1>{this.props.departure}</h1>
                    </div>

                    <div className="center">
                        <div className="centershape">
                            <i className="fas fa-plane planeIcon"></i>
                        </div>
                        <p>{this.props.flightID}</p>
                    </div>

                    <div className="arrival">
                        <h1>{this.props.arrival}</h1>
                    </div>
                </div>

                <div className="infoCardTime">
                    <div className="departureTime">
                        <h1>Departed</h1>
                        <h2>{this.props.departureTime}</h2>
                    </div>

                    <div className="arrivalTime">
                        <h1>Arrival</h1>
                        <h2>{this.props.arrivalTime}</h2>
                    </div>
                </div>

                <div className="infoCardMovement">
                    <div className="flightSpeed">
                        <h1>Speed</h1>
                        <h2>{this.props.speed}<sub>mph</sub></h2>
                    </div>

                    <div className="flightAlt">
                        <h1>Altitude</h1>
                        <h2>{this.props.altitude}<sub>ft</sub></h2>
                    </div>
                </div>

                <div className="infoCardTrack">
                    <div className="trackString">
                        <h1>Track</h1>
                        <h2>{this.props.track}º</h2>
                    </div>

                    <div className="trackGraphicCont">
                    <i className="fas fa-plane trackIcon"></i>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default InfoCard;