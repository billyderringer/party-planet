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
                            <h6>Email: sample@sample.com</h6>
                            <h6>Phone: 111-111-1111</h6>
                            <h6>Address: 1234 Sample St<br/>
                                Dallas , TX, 22222
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