import React from 'react'
import { connect } from 'react-redux'

function TestOutput(props){
    const {customer}=props
    return(
        <div>
            First Name: {customer.firstName}<br/>
            Last Name: {customer.lastName}<br/>
            Phone: {customer.phoneNumber}<br/>
            Email: {customer.emailAddress}<br/>
            Street: {customer.streetAddress}<br/>
            City: {customer.city}<br/>
            State: {customer.usState}<br/>
            Zip: {customer.zipCode}<br/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        customer: state.customerReducer.currentCustomer
    }
}

export default connect(mapStateToProps)(TestOutput)