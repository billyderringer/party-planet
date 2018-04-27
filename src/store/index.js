import { createStore, combineReducers } from 'redux'

import customerReducer from './customer'

const reducer = combineReducers({
    customerReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store