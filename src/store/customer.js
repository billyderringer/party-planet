const initialState = {
    currentCustomer: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        streetAddress: '',
        city: '',
        usState: '',
        zipCode: ''
    },
    customers:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CUSTOMER':
            const customers = state.customers.slice()
            customers.push(action.customer)
            return Object.assign({}, state, { customers })
        case 'UPDATE_FIRST_NAME':
            return {
                ...state,
                currentCustomer:{
                    ...state.currentCustomer,
                    firstName:action.firstName
                }
            }
        case 'UPDATE_LAST_NAME':
            return {
                ...state,
                currentCustomer:{
                    ...state.currentCustomer,
                    lastName:action.lastName
                }
            }
        case 'UPDATE_PHONE_NUMBER':
            return {
                ...state,
                currentCustomer:{
                    ...state.currentCustomer,
                    phoneNumber:action.phoneNumber
                }
            }
        case 'UPDATE_EMAIL_ADDRESS':
            return {
                ...state,
                currentCustomer:{
                    ...state.currentCustomer,
                    emailAddress:action.emailAddress
                }
            }
        case 'UPDATE_STREET_ADDRESS':
            return {
                ...state,
                currentCustomer:{
                    ...state.currentCustomer,
                    streetAddress:action.streetAddress
                }
            }
        case 'UPDATE_CITY':
            return {
                ...state,
                currentCustomer:{
                    ...state.currentCustomer,
                    city:action.city
                }
            }
        case 'UPDATE_US_STATE':
            return {
                ...state,
                currentCustomer:{
                    ...state.currentCustomer,
                    usState:action.usState
                }
            }
        case 'UPDATE_ZIP_CODE':
            return {
                ...state,
                currentCustomer:{
                    ...state.currentCustomer,
                    zipCode:action.zipCode
                }
            }
        default:
            return state
    }
}

export default reducer