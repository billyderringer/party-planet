import React from 'react'
import { connect } from 'react-redux'
import './Cart.css'

function Cart(props) {
    const {customer}=props
    return (
        <div className="row cart-container">
            <div className="col-7 summary-left">
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
                        <table className="table">
                            <tbody>
                            <tr>
                                <th>Description</th>
                                <th>Qty</th>
                            </tr>
                                    <tr>
                                        <td className="summary-description">Sample data</td>
                                        <td className="summary-qty">4 X</td>
                                    </tr>
                            <tr>
                                <td className="summary-description">Sample data</td>
                                <td className="summary-qty">4 X</td>
                            </tr>
                            <tr>
                                <td className="summary-description">Sample data</td>
                                <td className="summary-qty">4 X</td>
                            </tr>
                            <tr>
                                <td className="summary-description">Sample data</td>
                                <td className="summary-qty">4 X</td>
                            </tr>
                            <tr>
                                <td className="summary-description">Sample data</td>
                                <td className="summary-qty">4 X</td>
                            </tr>
                            <tr>
                                <td className="summary-description">Sample data</td>
                                <td className="summary-qty">4 X</td>
                            </tr>
                            <tr>
                                <td className="summary-description">Sample data</td>
                                <td className="summary-qty">4 X</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="col-5 summary-right">
                <div className="row">
                    <div className="col-12 top-right-cart text-center">
                        CART
                    </div>
                    <div className="col-12 bottom-right-cart">

                    </div>
                </div>
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