import React, {Component} from 'react'
import { connect } from 'react-redux'
import './CustomerForm.css'

class CustomerInfo extends Component {
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

    componentDidMount() {
        if (this.props.customers) {
            this.loadCustomer()
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
        this.props.updateCustomerProperty(e.target.name,e.target.value)
    }

    loadCustomer = () => {
        const {
            firstName,
            lastName,
            phoneNumber,
            emailAddress,
            streetAddress,
            city,
            usState,
            zipCode
        } = this.props.customers

        this.setState({
            firstName: firstName ? firstName : '',
            lastName: lastName ? lastName : '',
            phoneNumber: phoneNumber ? phoneNumber : '',
            emailAddress: emailAddress ? emailAddress : '',
            streetAddress: streetAddress ? streetAddress : '',
            city: city ? city : '',
            usState: usState ? usState : '',
            zipCode: zipCode ? zipCode : ''
        })
    }

    render() {
        return (

            <form>
                <h2>Customer Info</h2>
                <hr />
                <div className="row customer-form">
                    <div className="col-6 left-col">
                        <input type="text"
                               name="firstName"
                               onChange={this.handleChange}
                               value={this.state.firstName}
                               className="form-control"
                               placeholder="First Name" />
                        <input type="text"
                               name="lastName"
                               onChange={this.handleChange}
                               value={this.state.lastName}
                               className="form-control"
                               placeholder="Last Name" />
                        <input type="tel"
                               name="phoneNumber"
                               onChange={this.handleChange}
                               value={this.state.phoneNumber}
                               className="form-control"
                               placeholder="Phone" />
                        <input type="email"
                               name="emailAddress"
                               onChange={this.handleChange}
                               value={this.state.emailAddress}
                               className="form-control"
                               placeholder="Email" />

                     </div>
                    <div className="col-6 right-col">
                        <input type="text"
                               name="streetAddress"
                               onChange={this.handleChange}
                               value={this.state.streetAddress}
                               className="form-control"
                               placeholder="Street Address" />
                        <input type="text"
                               name="city"
                               onChange={this.handleChange}
                               value={this.state.city}
                               className="form-control"
                               placeholder="City" />
                        <input type="text"
                               name="usState"
                               onChange={this.handleChange}
                               value={this.state.usState}
                               className="form-control"
                               placeholder="State" />
                        <input type="text"
                               name="zipCode"
                               onChange={this.handleChange}
                               value={this.state.zipCode}
                               className="form-control"
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
            const action = {type: 'UPDATE_CUSTOMER_PROPERTY', property,value}
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps) (CustomerInfo)