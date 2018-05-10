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
                            <h6>Email: rderringer@yahoo.com</h6>
                            <h6>Phone: 214-480-0284</h6>
                            <h6>Address: 15250 Kleberg Rd #27<br/>
                                Dallas , TX, 75253
                            </h6>
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