import React, {Component} from 'react'
import './Inventory.css'
import {connect} from "react-redux";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentCount: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlePlus = this.handlePlus.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
    }

    handleChange = (e) => {
        console.log(e)
    }

    handlePlus = () => {
        this.setState({
          currentCount: this.state.currentCount + 1
        })
        this.props.updateCounterProperty(this.props.identity, this.props.position, this.state.currentCount+1)
    }

    handleMinus = () => {
        const countResult =  this.state.currentCount > 0 ? this.state.currentCount - 1 : 0
        this.state.currentCount > 0 ?
            this.setState({
                currentCount: this.state.currentCount - 1
            }):
            this.setState({
                currentCount: 0
            })
        this.props.updateCounterProperty(this.props.identity, this.props.position, countResult)
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
                    onChange={this.handleChange}>{this.props.item}</h6>
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
        updateCounterProperty:(identity, position, count) => {
            const action = {type: 'UPDATE_NEEDED_PROPERTY', identity, position, count}
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Counter)