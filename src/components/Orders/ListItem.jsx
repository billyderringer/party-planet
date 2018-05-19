import React, {Component} from 'react'

class ListItem extends Component{
    render() {
        return (
            <li className="order-name">
                {this.props.order.firstName} {this.props.order.lastName}
                <span className="view-btn">
                 <button className="btn view-btn"
                         id={this.props.id}
                         onClick={this.props.handleClick}
                 >VIEW
                </button>
            </span>
            </li>
        )
    }
}

export default ListItem