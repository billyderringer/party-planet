import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Orders.css'
import OrderView from  './OrderView'
import ListItem from './ListItem'

let selected

class Orders extends Component {
    constructor(props) {
        super(props)
        this.state={
            order: 'Click Order to View'
        }
        this.handleClick = this.handleClick.bind(this)
        this.resetSelected = this.resetSelected.bind(this)
    }

    resetSelected = () => {
        selected = ''
    }


    handleClick = (e) => {
        selected = this.props.orders
            .filter(item => item.id.toString() === e.target.id)
        this.setState({order: selected})
    }

    render() {
        let orders = this.props.orders.map((item,i) => {
            return <ListItem key={i}
                             handleClick={this.handleClick}
                             order={item}
                             id={item.id}/>
        })
        return (
            <div className="col-12 orders-container">
                <h2><strong>Orders</strong></h2>
                <div className="orders-table">
                    {orders}
                </div>
                <OrderView
                    reset={this.resetSelected}
                    order={selected} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        orders: state.customerReducer.customers
    }
}

export default connect (mapStateToProps)(Orders)