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
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.customers) {
            this.loadCustomer()
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
        switch (e.target.name){
            case 'firstName':
                return this.props.updateFirstName(e.target.value)
            case 'lastName':
                return this.props.updateLastName(e.target.value)
            case 'phoneNumber':
                return this.props.updatePhoneNumber(e.target.value)
            case 'emailAddress':
                return this.props.updateEmailAddress(e.target.value)
            case 'streetAddress':
                return this.props.updateStreetAddress(e.target.value)
            case 'city':
                return this.props.updateCity(e.target.value)
            case 'usState':
                return this.props.updateUsState(e.target.value)
            case 'zipCode':
                return this.props.updateZipCode(e.target.value)
            default:
                return
        }
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

    handleSubmit = (e) => {
        e.preventDefault()
        const {
            firstName,
            lastName,
            phoneNumber,
            emailAddress,
            streetAddress,
            city,
            usState,
            zipCode
        } = this.state

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
        updateFirstName: (firstName) => {
            const action = {type: 'UPDATE_FIRST_NAME', firstName}
            dispatch(action)
        },
        updateLastName: (lastName) => {
            const action = {type: 'UPDATE_LAST_NAME', lastName}
            dispatch(action)
        },
        updatePhoneNumber: (phoneNumber) => {
            const action = {type: 'UPDATE_PHONE_NUMBER', phoneNumber}
            dispatch(action)
        },
        updateEmailAddress: (emailAddress) => {
            const action = {type: 'UPDATE_EMAIL_ADDRESS', emailAddress}
            dispatch(action)
        },
        updateStreetAddress: (streetAddress) => {
            const action = {type: 'UPDATE_STREET_ADDRESS', streetAddress}
            dispatch(action)
        },
        updateCity: (city) => {
            const action = {type: 'UPDATE_CITY', city}
            dispatch(action)
        },
        updateUsState: (usState) => {
            const action = {type: 'UPDATE_US_STATE', usState}
            dispatch(action)
        },
        updateZipCode: (zipCode) => {
            const action = {type: 'UPDATE_ZIP_CODE', zipCode}
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps) (CustomerInfo)