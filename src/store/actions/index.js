import constants from './constants'

const actions = {
    addCustomer: (customer) => {
        return { type: constants.ADD_CUSTOMER, customer }
    },
    updateFirstName: (firstName) => {
        return { type: constants.UPDATE_FIRST_NAME, firstName }
    },
    updateLastName: (lastName) => {
        return { type: constants.UPDATE_LAST_NAME, lastName }
    },
    updatePhoneNumber: (customer) => {
        return { type: constants.UPDATE_PHONE_NUMBER, customer }
    },
    updateEmailAddress: (customer) => {
        return { type: constants.UPDATE_EMAIL_ADDRESS, customer }
    },
    updateStreetAddress: (customer) => {
        return { type: constants.UPDATE_STREET_ADDRESS, customer }
    },
    updateCity: (customer) => {
        return { type: constants.UPDATE_CITY, customer }
    },
    updateUsState: (customer) => {
        return { type: constants.UPDATE_US_STATE, customer }
    },
    updateZipCode: (customer) => {
        return { type: constants.UPDATE_ZIP_CODE, customer }
    },
    setCurrentCustomer: (currentCustomer) => {
        return {
            type: constants.SET_CURRENT_CUSTOMER,
            currentCustomer
        }
    }
}

export default actions;