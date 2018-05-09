import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Orders.css'

class Orders extends Component {
    render() {
        const orders = this.props.orders.map((item,i) => {
            return <tr className="order-row"
                       key={i} >
                        <td className="order-name">{item.firstName} {item.lastName}</td>
                        <td className="view-col"><h6 className="order-btn view-btn">VIEW</h6></td>
                        <td className="return-col"><h6 className="order-btn return-btn">RETURN</h6></td>
                    </tr>
        })
        return (
            <div className="orders-container">
                <h2><strong>Orders</strong></h2>
                <div className="orders-results">
                    <table>
                        <tbody>
                        {orders}
                        </tbody>
                    </table>
                </div>
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