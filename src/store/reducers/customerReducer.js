const initialState = {
    currentCustomer: {
        patyName: '',
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
        case 'UPDATE_CUSTOMER_PROPERTY':
            return {
                ...state,
                currentCustomer:{
                    ...state.currentCustomer,
                    [action.property]:action.value
                }
            }
        default:
            return state
    }
}

export default reducer