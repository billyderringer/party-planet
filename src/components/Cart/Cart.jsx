import React from 'react'
import {connect} from 'react-redux'
import './Cart.css'
import InventoryList from './InventoryList'
import CustomerSummary from './CustomerSummary'
import DateSummary from "./DateSummary"
import CostSummary from "./CostSummary"
import ButtonRow from '../Buttons/ButtonRow'

function Cart(props) {
    return (
        <div className="cart-container">
            <div className="row details-container">
                <div className="col-12 cart-header text-center">
                    <h6>Cart</h6>
                </div>
                <div className="col-12 customer-summary text-center">
                    <CustomerSummary customer={props.customer} />
                </div>
                <hr />
                <div className="row time-summary">
                    <DateSummary time={props.time} />
                </div>
                <hr />
                <div className="row cost-summary">
                    <CostSummary items={[props.tables,props.chairs, props.bounce, props.misc]} />
                </div>
                <div className="row btn-row">
                    <ButtonRow />
                </div>
            </div>
            <div className="row current-order">
                <div className="col-12 text-center order-header">
                    <h6>Current Order</h6>
                </div>
                <div className="col-12 order-list">
                    <table className="table">
                        <tbody>
                        <tr>
                            <th>Description</th>
                            <th>Qty</th>
                        </tr>
                        <InventoryList items={props.tables} />
                        <InventoryList items={props.chairs} />
                        <InventoryList items={props.bounce} />
                        <InventoryList items={props.misc} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        customer: state.customerReducer.currentCustomer,
        bounce: state.inventoryReducer.bounce,
        chairs: state.inventoryReducer.chairs,
        tables: state.inventoryReducer.tables,
        misc: state.inventoryReducer.misc,
        time: state.timeReducer
    }
}

export default connect(mapStateToProps)(Cart)