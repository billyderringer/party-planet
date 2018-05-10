import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Orders.css'
import OrderView from  './OrderView'

class Orders extends Component {
    render() {
        const orders = this.props.orders.map((item,i) => {
            return <tr className="order-row"
                       key={i} >
                    <td className="order-name">{item.firstName} {item.lastName}</td>
                    <td className="view-col"><button className="btn view-btn">VIEW</button></td>
                </tr>
        })
        return (
            <div className="col-12 orders-container">
                <h2><strong>Orders</strong></h2>
                <div className="orders-table">
                    <table>
                        <tbody>
                            {orders}
                        </tbody>
                    </table>
                </div>
                <OrderView />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        orders: state.customerReducer.customers
    }
}

export default connect (mapStateToProps)(Orders)