import React from 'react'
import {connect} from 'react-redux'
import './Cart.css'

function Cart(props) {
    const {customer} = props
    return (
        <div className="row cart-container">
            <div className="col-7 summary-left">
                <div className="row">
                    <div className="col-12 top-left-cart text-center">
                        <p className="name-summary">
                            {customer.firstName || customer.lastName ?
                                customer.firstName + '  ' + customer.lastName : 'Name'}<br/>
                            {customer.phoneNumber ? customer.phoneNumber : 'Phone Number'}<br/>
                            {customer.emailAddress ? customer.emailAddress : 'Email'}<br/>
                            {customer.streetAddress ? customer.streetAddress : 'Street Address'}<br/>
                            {customer.city ? customer.city : 'City'}&nbsp;
                            {customer.usState ? customer.usState : 'State'}&nbsp;
                            {customer.zipCode ? customer.zipCode : 'Zip'}
                        </p>
                    </div>
                    <div className="col-12 bottom-left-cart">
                        <table className="table">
                            <tbody>
                            <tr>
                                <th>Description</th>
                                <th>Qty</th>
                            </tr>
                            {
                                props.tables
                                    .filter(item => item.needed > 0)
                                    .map(item =>
                                        <tr key={item.description + '_row'}>
                                            <td className="summary-description"
                                                key={item.description}
                                            >{item.description}</td>
                                            <td className="summary-qty"
                                                key={item.description + '_' + item.description.needed}
                                            >{item.needed}
                                            </td>
                                            <td className="summary-remove"
                                                key={item.description + '_icon_container'}
                                            >
                                                <i className="fa fa-times-circle remove"
                                                   key={item.description + '_icon'}
                                                   aria-hidden="true"
                                                />
                                            </td>
                                        </tr>
                                    )
                            }
                            {
                                props.chairs
                                    .filter(item => item.needed > 0)
                                    .map(item =>
                                        <tr key={item.description + '_row'}>
                                            <td className="summary-description"
                                                key={item.description}
                                            >{item.description}</td>
                                            <td className="summary-qty"
                                                key={item.description + '_' + item.description.needed}
                                            >{item.needed}
                                            </td>
                                            <td className="summary-remove"
                                                key={item.description + '_icon_container'}
                                            >
                                                <i className="fa fa-times-circle remove"
                                                   key={item.description + '_icon'}
                                                   aria-hidden="true"
                                                />
                                            </td>
                                        </tr>
                                    )
                            }
                            {
                                props.bounce
                                    .filter(item => item.needed > 0)
                                    .map(item =>
                                        <tr key={item.description + '_row'}>
                                            <td className="summary-description"
                                                key={item.description}
                                            >{item.description}</td>
                                            <td className="summary-qty"
                                                key={item.description + '_' + item.description.needed}
                                            >{item.needed}
                                            </td>
                                            <td className="summary-remove"
                                                key={item.description + '_icon_container'}
                                            >
                                                <i className="fa fa-times-circle remove"
                                                   key={item.description + '_icon'}
                                                   aria-hidden="true"
                                                />
                                            </td>
                                        </tr>
                                    )
                            }
                            {
                                props.misc
                                    .filter(item => item.needed > 0)
                                    .map(item =>
                                        <tr key={item.description + '_row'}>
                                            <td className="summary-description"
                                                key={item.description}
                                            >{item.description}</td>
                                            <td className="summary-qty"
                                                key={item.description + '_' + item.description.needed}
                                            >{item.needed}
                                            </td>
                                            <td className="summary-remove"
                                                key={item.description + '_icon_container'}
                                            >
                                                <i className="fa fa-times-circle remove"
                                                   key={item.description + '_icon'}
                                                   aria-hidden="true"
                                                />
                                            </td>
                                        </tr>
                                    )
                            }
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
        customer: state.customerReducer.currentCustomer,
        bounce: state.inventoryReducer.bounce,
        chairs: state.inventoryReducer.chairs,
        tables: state.inventoryReducer.tables,
        misc: state.inventoryReducer.misc
    }
}

export default connect(mapStateToProps)(Cart)