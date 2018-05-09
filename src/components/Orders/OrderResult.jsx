import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Orders.css'

class Orders extends Component {
    render() {
        const {subtotal} = this.props
        const total = (subtotal + (subtotal * .0625))

        return (
            this.props.orders.map((item,i) => {
                return <tr className="order-row"
                           key={i}>
                    <td className="order-name">{item.firstName} {item.lastName}</td>
                    <td className="order-total">${parseFloat(total).toFixed(2)}</td>
                    <td className="view-col"><h6 className="order-btn view-btn">VIEW</h6></td>
                    <td className="return-col"><h6 className="order-btn return-btn">RETURN</h6></td>
                </tr>
            }
        )
        )
    }
}

const mapStateToProps = (state) => {
    return{
        orders: state.customerReducer.customers,
        subtotal: state.inventoryReducer.subtotal
    }
}

export default connect (mapStateToProps)(Orders)