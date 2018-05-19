import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Orders.css'

class OrderView extends Component {
    render() {
        let runCheck = this.props.order !== undefined
        let order = runCheck ? this.props.order[0] : this.props.order
        let orderBody = runCheck ?
            <div>
                <h6>Email: {order.emailAddress}</h6>
                <h6>Phone: {order.phoneNumber}</h6>
                <h6>Address: {order.streetAddress}<br/>
                    {order.city} , {order.usState} , {order.zipCode}
                </h6>
            </div>
            : ''
        return (
            <div className="col-12 orders-view">
                <div className="row">
                    <div className="col-12 customer-header text-center">
                        <h6>{runCheck ?
                            order.firstName +
                            ' ' +
                            order.lastName: 'View Order Here'}</h6>
                    </div>
                    <div className="col-12 customer-body">
                        {orderBody}
                    </div>
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

export default connect (mapStateToProps)(OrderView)