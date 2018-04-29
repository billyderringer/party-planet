import { createStore, combineReducers } from 'redux'

import customerReducer from './reducers/customerReducer'
import inventoryReducer from './reducers/inventoryReducer'
import timeReducer from './reducers/timeReducer'

const reducer = combineReducers({
    customerReducer,
    inventoryReducer,
    timeReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store