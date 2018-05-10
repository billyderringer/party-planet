import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Orders.css'

class OrderView extends Component {
    render() {
        return (
            <div className="col-12 orders-view">
                <div className="row">
                    <div className="col-12 customer-header text-center">
                        <h6>Rachael Derringer</h6>
                    </div>
                    <div className="col-12 customer-body">
                        <ul>
                            <li>Email: rderringer@yahoo.com</li>
                            <li>Phone: 214-480-0284</li>
                            <li>Address: 15250 Kleberg Rd #27<br/>
                                Dallas , TX, 75253
                            </li>
                        </ul>
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