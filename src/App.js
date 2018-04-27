import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store/'
import NavBar from "./components/NavBar"
import CustomerForm from './components/Customer/'
// eslint-disable-next-line
import TestOutput from  './components/TestOutput'

class App extends Component {
    render() {
    return (
        <Provider store={store}>
            <div>
                <NavBar />
                <div className="row content-row">
                    <div className="col-6 left-container">
                        <CustomerForm />
                    </div>
                    <div className="col-6 right-container">
                    </div>
                </div>
            </div>
        </Provider>
    )
  }
}

export default App
