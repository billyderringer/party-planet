import React, {Component} from 'react'
import '../Cart.css'
import {connect} from 'react-redux'

class ConfirmButton extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        const {
            customer,
            bounce,
            tables,
            chairs,
            misc
        } = this.props

        const orders =
            bounce
                .concat(tables)
                .concat(chairs)
                .concat(misc)

        let filteredOrders = []

        orders
            .filter(item => item.needed > 0)
            .map((item, i) => {
                return filteredOrders.push(item)
            })

        const newCustomer = {
            firstName : customer.firstName,
            lastName : customer.lastName,
            phoneNumber : customer.phoneNumber,
            emailAddress : customer.emailAddress,
            streetAddress : customer.streetAddress,
            city : customer.city,
            usState : customer.usState,
            zipCode : customer.zipCode,
            order: filteredOrders
        }
        this.props.addNewCustomer(newCustomer)
        this.props.updateAvailability()
    }

    render() {
        return (
            <React.Fragment>
                <button
                    className="btn save-btn cart-btn"
                    onClick={this.handleClick}
                >CONFIRM</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        customer : state.customerReducer.currentCustomer,
        bounce : state.inventoryReducer.bounce,
        tables : state.inventoryReducer.tables,
        chairs : state.inventoryReducer.chairs,
        misc : state.inventoryReducer.misc
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addNewCustomer:(newCustomer) => {
            const action = {type: 'ADD_CUSTOMER', newCustomer}
            dispatch(action)
        },
        updateAvailability: () => {
            const action = {type: 'UPDATE_AVAILABILITY'}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmButton)