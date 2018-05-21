import constants from './constants'

const actions = {
    addNewCustomer:(newCustomer) => {
        return {type: constants.ADD_CUSTOMER, newCustomer}
    },
    updateCustomerProperty: (name,value) => {
        return { type: constants.UPDATE_CUSTOMER_PROPERTY, name,value }
    },
    archiveCustomer: (archiveCustomer) => {
        return { type: constants.SET_CURRENT_CUSTOMER, archiveCustomer }
    },
    updateCustomers: (currentCustomer) => {
        return { type: constants.REMOVE_CUSTOMER, currentCustomer }
    }
}

export default actions