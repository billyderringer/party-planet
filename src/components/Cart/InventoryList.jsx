import React, {Component} from 'react'
import './Cart.css'

class InventoryList extends Component{
    render() {
        return (
            this.props.items
                .filter(item => item.needed > 0)
                .map(item =>
                    <tr key={item.description + '_row'}>
                        <td className="summary-description"
                            key={item.description}
                        >{item.description}</td>
                        <td className="summary-qty"
                            key={item.description + '_' + item.description.needed}
                        >{item.needed}
                        </td>
                        <td className="summary-remove"
                            key={item.description + '_icon_container'}
                        >
                            <i className="fa fa-times-circle remove"
                               key={item.description + '_icon'}
                               aria-hidden="true"
                            />
                        </td>
                    </tr>
                )
        )
    }
}

export default InventoryList