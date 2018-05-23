import React, {Component} from 'react'
import './Cart.css'

class DateSummary extends Component{
    render() {
        return (
            <React.Fragment>
                <div className="col-8">
                    <h3>Out:</h3>
                </div>
                <div className="col-4">
                    <h3>{this.props.time.outDate}</h3>
                    <h3>{this.props.time.outTime}</h3>
                </div>
                <div className="col-8">
                    <h3>In:</h3>
                </div>
                <div className="col-4">
                    <h3>{this.props.time.returnDate}</h3>
                    <h3>{this.props.time.returnTime}</h3>
                </div>
            </React.Fragment>
        )
    }
}

export default DateSummary