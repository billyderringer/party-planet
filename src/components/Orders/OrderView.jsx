import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Orders.css'

class OrderView extends Component {
    render() {
        let runCheck = this.props.order !== undefined
        let order = runCheck ? this.props.order[0] : this.props.order
        let orderBody = runCheck ?
            <div>
                <h6><strong>Email:</strong> {order.emailAddress}</h6>
                <h6><strong>Phone:</strong> {order.phoneNumber}</h6>
                <h6><strong>Address:</strong> {order.streetAddress}</h6>
                <h6><strong>City:</strong> {order.city}</h6>
                <h6><strong>St:</strong> {order.usState}
                    <span className="view-zip">
                        <strong>Zip:</strong> {order.zipCode}
                    </span>
                </h6>
                <h6><strong>Order: </strong></h6>
                <div className="row view-list">
                    {order.order.map((item,i) => {
                        return <div key={i}
                                    className="col-12 view-list-item">
                            {item.description}
                            <span className="list-item-qty text-right">
                                x {item.needed}
                            </span>
                            </div>
                    })}
                </div>
                <h6 className="view-total text-center">
                    TOTAL: ${parseFloat(order.total).toFixed(2)}
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