import React, {Component} from 'react'
import './Cart.css'
import CancelButton from "./CancelButton";
import ConfirmButton from "./ConfirmButton";

class ButtonRow extends Component{
    render() {
        return (
            <div className="row btn-row">
                <div className="col-12">
                    <CancelButton />
                    <ConfirmButton />
                </div>
            </div>
        )
    }
}

export default ButtonRow