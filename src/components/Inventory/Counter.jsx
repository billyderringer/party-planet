import React, {Component} from 'react'
import './Inventory.css'
import {connect} from "react-redux";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentCount: 0
        }
        this.handlePlus = this.handlePlus.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
    }

    handlePlus = () => {
        const needed = this.props.needed + 1
        const available = this.props.available
        const countNeeded =  needed < available ? needed : available
        const currentAvailable =
            needed < available ?
                available - needed :
                0
        this.props.updateCounterProperty(
            this.props.identity,
            this.props.position,
            countNeeded,
            currentAvailable,
            "plus"
        )
    }

    handleMinus = () => {
        const needed = this.props.needed - 1
        const available = this.props.available
        //ensures count does not go below 0
        const countNeeded =  needed > 0 ? needed : 0
        const currentAvailable =
            available > countNeeded ?
                available - countNeeded : available
        this.props.updateCounterProperty(
            this.props.identity,
            this.props.position,
            countNeeded,
            currentAvailable,
            "minus"
        )
    }

    render() {
        return (
            <div className="counter">
                <button
                    onClick={this.handleMinus}
                >
                    <i className="fa fa-minus minus"
                       aria-hidden="true"
                    />
                </button>
                <h6 id="valueHolder">
                    {this.props.needed}
                </h6>
                <button
                    onClick={this.handlePlus} >
                    <i className="fa fa-plus plus"
                       aria-hidden="true"
                    />
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateCounterProperty:(identity, position, count, currentAvailable, operation) => {
            const action = {type: 'UPDATE_NEEDED_PROPERTY', identity, position, count, currentAvailable, operation}
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Counter)