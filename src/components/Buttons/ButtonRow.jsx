import React, {Component} from 'react'
import '../Cart/Cart.css'
import CancelButton from "./CancelButton";
import ConfirmButton from "./ConfirmButton";

class ButtonRow extends Component{
    render() {
        return (
            <div className="col-12 btn-col">
                <CancelButton />
                <ConfirmButton />
            </div>
        )
    }
}

export default ButtonRow