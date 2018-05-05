import React, {Component} from 'react'
import './Inventory.css'
import Counter from "./Counter"

class Table extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Qty Needed</th>
                        <th>Avail</th>
                        <th>Price</th>
                    </tr>
                    {
                        this.props.items.map((item,i) =>
                            <tr key={item.description+i}>
                                <td className="description"
                                    key={item.description}>{item.description}</td>
                                <td className="table-counter"
                                    key={item.description+' '+i}>
                                    <Counter
                                        identity={this.props.identity}
                                        position={i}
                                        needed={item.needed}
                                        available={item.available}
                                    />
                                </td>
                                <td className="available"
                                    key={item.available}
                                >
                                    {item.available === item.needed ?
                                        0: item.available - item.needed}</td>
                                <td className="price"
                                    key={item.price}>{parseFloat(item.price).toFixed(2)}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table