import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Orders.css'
import OrderView from  './OrderView'

class Orders extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        console.log(e.target)
    }

    render() {
        let orders = this.props.orders.map((item,i) => {
            return <ul className="order-row"
                       key={i} >
                    <li className="order-name">
                        {item.firstName} {item.lastName}
                        <span className="view-btn">
                             <button className="btn view-btn"
                                     ref={item.description}
                                     onClick={this.handleClick}
                             >VIEW
                        </button>
                        </span>
                    </li>
                </ul>
        })
        return (
            <div className="col-12 orders-container">
                <h2><strong>Orders</strong></h2>
                <div className="orders-table">
                    {orders}
                </div>
                <OrderView />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        orders: state.customerReducer.customers
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setCurrentCustomer:(currentCustomer) => {
            const action = {type: 'GET_CUSTOMER', currentCustomer}
            dispatch(action)
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Orders)