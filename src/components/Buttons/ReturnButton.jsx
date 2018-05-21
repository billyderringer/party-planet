import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Buttons.css'

class ReturnButton extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
        //get current customer to archive
        //add currentCustomer to archivedCustomers array
        let currentCustomer = this.props.order
        this.props.archiveCustomer(currentCustomer)

        //return items to inventory
        //create array of items
        let itemArray = this.props.order.order
        console.log(itemArray)
        this.props.returnItems(itemArray)

        //remove current customer from array
        this.props.updateCustomers(currentCustomer)
        this.props.reset()
    }

    render(){
        return(
            <React.Fragment>
                <button className="return-btn"
                        ref={this.props.order.id}
                        onClick={this.handleClick}
                >RETURN</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return(
        {customers : state.customerReducer}
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        archiveCustomer:(archivedCustomer) => {
            const action = {type: 'ARCHIVE_CUSTOMER', archivedCustomer}
            dispatch(action)
        },
        returnItems:(itemArray) => {
            const action = {type: 'RETURN_ITEMS', itemArray}
            dispatch(action)
        },
        updateCustomers:(currentCustomer) => {
            const action = {type: 'REMOVE_CUSTOMER', currentCustomer}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReturnButton)