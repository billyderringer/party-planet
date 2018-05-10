import React, {Component} from 'react'
import { connect } from 'react-redux'
import './CustomerForm.css'
import TimeForm from '../TimeForm/'

class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
        this.props.updateCustomerProperty(e.target.name,e.target.value)
    }

    render() {
        const {customer} = this.props
        return (
            <form>

                <div className="row customer-form">
                    <div className="col-12">
                        <h2><strong>Customer Info</strong></h2>
                    </div>
                    <div className="col-3 left-col">
                        <input type="text"
                               name="firstName"
                               onChange={this.handleChange}
                               value={customer.firstName}
                               className="form-control form-control-sm"
                               placeholder="First Name" />
                        <input type="text"
                               name="lastName"
                               onChange={this.handleChange}
                               value={customer.lastName}
                               className="form-control form-control-sm"
                               placeholder="Last Name" />
                        <input type="tel"
                               name="phoneNumber"
                               onChange={this.handleChange}
                               value={customer.phoneNumber}
                               className="form-control form-control-sm"
                               placeholder="Phone" />
                        <input type="email"
                               name="emailAddress"
                               onChange={this.handleChange}
                               value={customer.emailAddress}
                               className="form-control form-control-sm"
                               placeholder="Email" />
                     </div>
                    <div className="col-3 right-col">
                        <input type="text"
                               name="streetAddress"
                               onChange={this.handleChange}
                               value={customer.streetAddress}
                               className="form-control form-control-sm"
                               placeholder="Street Address" />
                        <input type="text"
                               name="city"
                               onChange={this.handleChange}
                               value={customer.city}
                               className="form-control form-control-sm"
                               placeholder="City" />
                        <input type="text"
                               name="usState"
                               onChange={this.handleChange}
                               value={customer.usState}
                               className="form-control form-control-sm"
                               placeholder="State" />
                        <input type="text"
                               name="zipCode"
                               onChange={this.handleChange}
                               value={customer.zipCode}
                               className="form-control form-control-sm"
                               pattern="[0-9]{5}"
                               placeholder="Zip Code" />
                    </div>
                    <div className="col-6">
                        <TimeForm />
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        customer: state.customerReducer.currentCustomer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateCustomerProperty:(property,value) => {
            const action = {type: 'UPDATE_CUSTOMER_PROPERTY', property, value}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CustomerForm)