import React from 'react'
import { connect } from 'react-redux'
import './Cart.css'

function Cart(props) {
    const {customer}=props
    return (
        <div className="row cart-container">
            <div className="col-6 summary-left">
                <div className="row">
                    <div className="col-12 top-left-cart text-center">
                        <p className="name-summary">
                            {customer.firstName} {customer.lastName}<br />
                            {customer.phoneNumber}<br />
                            {customer.emailAddress}<br />
                            {customer.streetAddress}<br />
                            {customer.city} {customer.usState} {customer.zipCode}
                        </p>
                    </div>
                    <div className="col-12 bottom-left-cart">
                        this is a test
                    </div>
                </div>
            </div>
            <div className="col-6 summary-right">

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        customer: state.customerReducer.currentCustomer
    }
}

export default connect(mapStateToProps)(Cart)