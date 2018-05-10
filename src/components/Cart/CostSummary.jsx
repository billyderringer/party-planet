import React from 'react'
import './Cart.css'
import {connect} from "react-redux";

function CostSummary(props){
    let subtotal = props.subtotal
    let taxRate = .0625
    let tax = props.subtotal * taxRate
    let total = subtotal + tax
    return (
        <React.Fragment>
            <div className="col-8 out-title">
                <h3>Subtotal:</h3>
            </div>
            <div className="col-4 current-out">
                <h3>$ {parseFloat(subtotal).toFixed(2)}</h3>
            </div>
            <div className="col-8 in-title">
                <h3>Tax({taxRate * 100}%):</h3>
            </div>
            <div className="col-4 current-in">
                <h3>$ {parseFloat(tax).toFixed(2)}</h3>
            </div>
            <hr />
            <div className="col-8 total-row">
                <h3>TOTAL:</h3>
            </div>
            <div className="col-4 total-row">
                <h3>$ {parseFloat(total).toFixed(2)}</h3>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) =>{
    return{
        subtotal: state.inventoryReducer.subtotal
    }
}

export default connect(mapStateToProps)(CostSummary)