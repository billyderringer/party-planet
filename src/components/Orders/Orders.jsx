import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Orders.css'

class Orders extends Component {
    render() {
        const orders = this.props.orders.map((item,i) => {
            return <tr className="order-row"
                       key={i} >
                    <td className="order-name">{item.firstName} {item.lastName}</td>
                <td className="view-col"><button className="btn view-btn">VIEW</button></td>
                    <td className="return-col"><button className="btn return-btn">RETURN</button></td>
                </tr>
        })
        return (
            <div className="orders-container">
                <table>
                    <tbody>
                        {orders}
                    </tbody>
                </table>
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