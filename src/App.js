import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store/'
import NavBar from "./components/NavBar"
import CustomerForm from './components/Customer/'
import InventoryForm from './components/Inventory'
// eslint-disable-next-line
import TestOutput from  './components/TestOutput'
import Cart from "./components/Cart/Cart"
import Orders from "./components/Orders/"

class App extends Component {
    render() {
    return (
        <Provider store={store}>
            <div className="container-main">
                <NavBar />
                <div className="row content-row">
                    <div className="col-md-6 shared-col">
                        <CustomerForm />
                        <InventoryForm />
                    </div>
                    <div className="col-md-3 shared-col">
                        <div className="row">
                            <Orders />
                        </div>

                    </div>
                    <div className="col-md-3 shared-col">
                        <Cart />
                    </div>
                </div>
            </div>
        </Provider>
    )
  }
}

export default App
