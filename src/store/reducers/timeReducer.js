const initialState = {
    outDate: '2018-01-01',
    outTime: '0800',
    returnDate: '2018-01-02',
    returnTime: '0800'
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