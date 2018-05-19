import React, {Component} from 'react'
import '../Cart.css'
import {connect} from 'react-redux'

class ConfirmButton extends Component{
    constructor(props) {
        super(props)
        this.state={
            count : 0
        }
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
        let total = 0

        //get added items from inventory to add to order
        orders
            .filter(item => item.needed > 0)
            .map((item, i) => {
                return filteredOrders.push(item)
            })

        //get total for each order
        filteredOrders.map(item => {
            let qtyPrice = (item.price * item.needed)
           return total += ( qtyPrice + (qtyPrice * .0625))
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
            order : filteredOrders,
            total : total,
            id : this.state.count
        }
        this.props.addNewCustomer(newCustomer)
        this.props.updateAvailability()
        this.setState({count: (this.state.count +1)})
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