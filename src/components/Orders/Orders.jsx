import React, { Component } from 'react'
import OrderResult from './OrderResult'
import './Orders.css'

class Orders extends Component {
    render() {
        return (
            <div className="orders-container">
                <h2><strong>Orders</strong></h2>
                <table className="table">
                    <tbody className="orders-results">
                    <tr>
                        <th className="name-header">Name</th>
                        <th className="total-header">Total</th>
                    </tr>
                    <OrderResult />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Orders