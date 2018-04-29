const initialState = {
    outDate: '',
    outTime: '',
    returnDate: '',
    returnTime: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TIME':
            return Object.assign({}, state, {[action.property]:action.value})
        default:
            return state
    }
}

export default reducer