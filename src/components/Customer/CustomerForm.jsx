import React, {Component} from 'react'
import { connect } from 'react-redux'
import './CustomerForm.css'

class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            emailAddress: '',
            streetAddress: '',
            city: '',
            usState: '',
            zipCode: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
        this.props.updateCustomerProperty(e.target.name,e.target.value)
    }

    render() {
        return (
            <form>
                <h2><strong>Customer Info</strong></h2>
                <div className="row customer-form">
                    <div className="col-6 left-col">
                        <input type="text"
                               name="firstName"
                               onChange={this.handleChange}
                               value={this.state.firstName}
                               className="form-control form-control-sm"
                               placeholder="First Name" />
                        <input type="text"
                               name="lastName"
                               onChange={this.handleChange}
                               value={this.state.lastName}
                               className="form-control form-control-sm"
                               placeholder="Last Name" />
                        <input type="tel"
                               name="phoneNumber"
                               onChange={this.handleChange}
                               value={this.state.phoneNumber}
                               className="form-control form-control-sm"
                               placeholder="Phone" />
                        <input type="email"
                               name="emailAddress"
                               onChange={this.handleChange}
                               value={this.state.emailAddress}
                               className="form-control form-control-sm"
                               placeholder="Email" />

                     </div>
                    <div className="col-6 right-col">
                        <input type="text"
                               name="streetAddress"
                               onChange={this.handleChange}
                               value={this.state.streetAddress}
                               className="form-control form-control-sm"
                               placeholder="Street Address" />
                        <input type="text"
                               name="city"
                               onChange={this.handleChange}
                               value={this.state.city}
                               className="form-control form-control-sm"
                               placeholder="City" />
                        <input type="text"
                               name="usState"
                               onChange={this.handleChange}
                               value={this.state.usState}
                               className="form-control form-control-sm"
                               placeholder="State" />
                        <input type="text"
                               name="zipCode"
                               onChange={this.handleChange}
                               value={this.state.zipCode}
                               className="form-control form-control-sm"
                               pattern="[0-9]{5}"
                               placeholder="Zip Code" />
                    </div>
                </div>
            </form>
        )
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

export default connect(null, mapDispatchToProps) (CustomerForm)