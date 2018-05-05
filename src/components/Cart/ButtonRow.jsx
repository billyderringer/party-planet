import React, {Component} from 'react'
import './Cart.css'

class ButtonRow extends Component{
    render() {
        return (
            <div className="btn-row">
                    <button className="cancel-btn cart-btn">CANCEL</button>
                    <button className="save-btn cart-btn">CONFIRM</button>
            </div>
        )
    }
}

export default ButtonRow