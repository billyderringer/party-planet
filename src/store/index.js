import { createStore, combineReducers } from 'redux'
import customerReducer from './reducers/customerReducer'
import inventoryReducer from './reducers/inventoryReducer'
import timeReducer from './reducers/timeReducer'
import {loadState, saveState} from './localStorage'

const persistedState = loadState()
const reducer = combineReducers({
    customerReducer,
    inventoryReducer,
    timeReducer
})

const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    )

store.subscribe(() => {
    saveState(store.getState())
})

export default store