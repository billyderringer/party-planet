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
    customers:[],
    archivedCustomers:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_CUSTOMER' :
            return {
                ...state,
                currentCustomer:{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    emailAddress: '',
                    streetAddress: '',
                    city: '',
                    usState: '',
                    zipCode: ''
                },
                customers: [
                    ...state.customers,
                    action.newCustomer
                ]
            }
        case 'UPDATE_CUSTOMER_PROPERTY':
            return {
                ...state,
                currentCustomer:{
                    ...state.currentCustomer,
                    [action.property]:action.value
                }
            }
        case 'ARCHIVE_CUSTOMER':
            return {
                ...state,
                archivedCustomers: [
                    ...state.archivedCustomers,
                    action.archivedCustomer
                ]
            }
        case 'REMOVE_CUSTOMER':
            let customerArray = state.customers
                .filter(customer => action.currentCustomer.id !== customer.id)
            return{
                ...state,
                customers : customerArray
            }
        default:
            return state
    }
}

export default reducer