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
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CUSTOMER' :
            return {
                currentCustomer:{
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    emailAddress: '',
                    streetAddress: '',
                    city: '',
                    usState: '',
                    zipCode: ''
                }
            }
        default:
            return state
    }
}

export default reducer