import React, {Component} from 'react'
import './Cart.css'

class CancelButton extends Component{
    render() {
        return (
            <React.Fragment>
                <button className="btn cancel-btn cart-btn">CANCEL</button>
            </React.Fragment>
        )
    }
}

export default CancelButton