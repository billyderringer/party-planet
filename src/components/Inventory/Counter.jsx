import React, {Component} from 'react'
import './Inventory.css'

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
    }

    handleMinus = () => {
        this.state.currentCount > 0 ?
            this.setState({
                currentCount: this.state.currentCount - 1
            }):
            this.setState({
                currentCount: 0
            })
    }

    render() {
        return (
            <div className="counter">
               <i className="fa fa-chevron-circle-down minus"
                  aria-hidden="true"
                  onClick={this.handleMinus} />
                <h6>{this.state.currentCount}</h6>
                <i className="fa fa-chevron-circle-up plus"
                   aria-hidden="true"
                   onClick={this.handlePlus} />
            </div>
        )
    }
}



export default Counter