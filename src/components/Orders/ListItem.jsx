import React, {Component} from 'react'

class ListItem extends Component{
    render() {
        return (
            <li className="order-name">
                {this.props.order.firstName} {this.props.order.lastName}
                 <button className="btn view-btn"
                         id={this.props.id}
                         onClick={this.props.handleClick}
                 >VIEW
                </button>
            </li>
        )
    }
}

export default ListItem