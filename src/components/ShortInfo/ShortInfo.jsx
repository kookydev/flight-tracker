import React, { Component } from 'react';
import './ShortInfo.css';

class ShortInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            departure: this.props.departure,
            arrival: this.props.arrival,
            flightID: this.props.flightID
         }
    }
    render() { 
        return ( 
            <div className="infoCardHead">
                <div className="departure">
                    <h1>{this.state.departure}</h1>
                </div>

                <div className="center">
                    <div className="centershape">
                        <i className="fas fa-plane planeIcon"></i>
                    </div>
                    <p>{this.state.flightID}</p>
                </div>

                <div className="arrival">
                    <h1>{this.state.arrival}</h1>
                </div>
            </div>
         );
    }
}
 
export default ShortInfo;