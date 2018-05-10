import React, {Component} from 'react'
import './Cart.css'

class CustomerSummary extends Component{
    render() {
        const customer = this.props.customer
        return (
            <React.Fragment>
                <p>
                    {customer.firstName || customer.lastName ?
                        customer.firstName + '  ' + customer.lastName : 'Name'}<br/>
                    {customer.phoneNumber ? customer.phoneNumber : 'Phone Number'}<br/>
                    {customer.emailAddress ? customer.emailAddress : 'Email'}<br/>
                    {customer.streetAddress ? customer.streetAddress : 'Street Address'}<br/>
                    {customer.city ? customer.city : 'City'}&nbsp;
                    {customer.usState ? customer.usState : 'State'}&nbsp;
                    {customer.zipCode ? customer.zipCode : 'Zip'}
                </p>
            </React.Fragment>
        )
    }
}

export default CustomerSummary