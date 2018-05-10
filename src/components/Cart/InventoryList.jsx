import React, {Component} from 'react'
import './Cart.css'

class InventoryList extends Component{

    listItems = (item) => {
        return <tr key={item.description + '_row'}>
            <td className="summary-description"
                key={item.description}
            >{item.description}</td>
            <td className="summary-qty"
                key={item.description + '_' + item.description.needed}
            >{item.needed}
            </td>
        </tr>
    }

    render() {
        return (
            this.props.items
                .filter(item => item.needed > 0)
                .map(item =>
                    this.listItems(item)
                )
        )
    }
}

export default InventoryList