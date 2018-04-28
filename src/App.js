import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store/'
import NavBar from "./components/NavBar"
import CustomerForm from './components/Customer/'
import InventoryForm from './components/Inventory'
// eslint-disable-next-line
import TestOutput from  './components/TestOutput'

class App extends Component {
    render() {
    return (
        <Provider store={store}>
            <div className="container-main">
                <NavBar />
                <div className="row content-row">
                    <div className="col-6 left-container">
                        <CustomerForm />
                        <InventoryForm />
                    </div>
                    <div className="col-6 right-container">
                        <TestOutput />
                    </div>
                </div>
            </div>
        </Provider>
    )
  }
}

export default App
