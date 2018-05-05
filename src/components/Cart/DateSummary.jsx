import React, {Component} from 'react'
import './Cart.css'

class DateSummary extends Component{
    render() {
        return (
            <div className="row date-summary">
                <div className="col-6 out-title">
                    <h3>Out:</h3>
                </div>
                <div className="col-6 current-out text-right">
                    <h3>{this.props.time.outDate}</h3>
                    <h3>{this.props.time.outTime}</h3>
                </div>
                <div className="col-6 in-title">
                    <h3>In:</h3>
                </div>
                <div className="col-6 current-in text-right">
                    <h3>{this.props.time.returnDate}</h3>
                    <h3>{this.props.time.returnTime}</h3>
                </div>
            </div>
        )
    }
}

export default DateSummary