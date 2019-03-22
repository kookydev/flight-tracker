import React, { Component } from 'react';
import './ShortInfo.css';

class ShortInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
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
         );
    }
}
 
export default ShortInfo;