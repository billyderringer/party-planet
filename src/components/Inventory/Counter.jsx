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
        this.setState({
            currentCount: this.state.currentCount + 1
        })
        this.props.updateCounterProperty(
            this.props.identity,
            this.props.position,
            this.state.currentCount + 1,
            this.props.currentAvailable - 1
        )
    }


    handleMinus = () => {
        const countResult =  this.state.currentCount > 0 ? this.state.currentCount - 1 : 0
        const availableResult =  this.state.currentAvailable > 0 ? this.state.currentAvailable + 1 : 0
        this.state.currentCount > 0 ?
            this.setState({
                currentCount: this.state.currentCount - 1
            }):
            this.setState({
                currentCount: 0
            })
        this.props.updateCounterProperty(
            this.props.identity,
            this.props.position,
            countResult,
            availableResult
        )
    }

    render() {
        return (
            <div className="counter">
               <button
                    onClick={this.handleMinus}
                    value={this.state.currentCount}
                    onChange={this.handleChange}
               >
                   <i className="fa fa-chevron-circle-down minus"
                      aria-hidden="true"
                      />
               </button>
                <h6
                    id="valueHolder"
                    onChange={this.handleChange}>{this.props.count}</h6>
                <button
                    onClick={this.handlePlus} >
                    <i className="fa fa-chevron-circle-up plus"
                       aria-hidden="true"
                      />
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateCounterProperty:(identity, position, count, currentAvailable) => {
            const action = {type: 'UPDATE_NEEDED_PROPERTY', identity, position, count, currentAvailable}
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Counter)