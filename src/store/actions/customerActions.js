import constants from './constants'

const actions = {
    updateCustomerProperty: (name,value) => {
        return { type: constants.UPDATE_CUSTOMER_PROPERTY, name,value }
    },
    setCurrentCustomer: (currentCustomer) => {
        return {
            type: constants.SET_CURRENT_CUSTOMER,
            currentCustomer
        }
    }
}

export default actions