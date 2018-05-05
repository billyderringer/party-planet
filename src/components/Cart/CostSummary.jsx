import React, {Component} from 'react'
import './Cart.css'

class CostSummary extends Component{
    render() {
        return (
            <div className="row date-summary">
                <div className="col-6 out-title">
                    <h3>Subtotal:</h3>
                </div>
                <div className="col-6 current-out">
                    <h3>{this.props.time.outDate}</h3>
                </div>
                <div className="col-6 in-title">
                    <h3>Tax(8%):</h3>
                </div>
                <div className="col-6 current-in">
                    <h3>{this.props.time.returnDate}</h3>
                </div>
                <hr />
                <div className="col-6 total-row">
                    <h3>TOTAL:</h3>
                </div>
                <div className="col-6 total-row">
                    <h3>$200</h3>
                </div>
            </div>
        )
    }
}

export default CostSummary