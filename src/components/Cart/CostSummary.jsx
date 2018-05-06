import React from 'react'
import './Cart.css'
import {connect} from "react-redux";

function CostSummary(props){
    let subtotal = props.subtotal
    let taxRate = .0625
    let tax = props.subtotal * taxRate
    let total = subtotal + tax
    return (
        <div className="row">
            <div className="col-6 out-title">
                <h3>Out:</h3>
            </div>
            <div className="col-6 current-out">
                <h3>{props.time.outDate}</h3>
                <h3>{props.time.outTime}</h3>
            </div>
            <div className="col-6 in-title">
                <h3>In:</h3>
            </div>
            <div className="col-6 current-in">
                <h3>{props.time.returnDate}</h3>
                <h3>{props.time.returnTime}</h3>
            </div>
            <hr />
            <div className="col-6">
                <h3>Subtotal:</h3>
            </div>
            <div className="col-6">
                <h3>$ {parseFloat(subtotal).toFixed(2)}</h3>
            </div>
            <div className="col-6">
                <h3>Tax({taxRate * 100}%):</h3>
            </div>
            <div className="col-6">
                <h3>$ {parseFloat(tax).toFixed(2)}</h3>
            </div>
            <hr />
            <div className="col-6 total-row">
                <h3>TOTAL:</h3>
            </div>
            <div className="col-6 total-row">
                <h3>$ {parseFloat(total).toFixed(2)}</h3>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        time: state.timeReducer,
        subtotal: state.inventoryReducer.subtotal
    }
}

export default connect(mapStateToProps)(CostSummary)