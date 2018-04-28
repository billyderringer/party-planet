import React, {Component} from 'react'
import './Inventory.css'
import Counter from "./Counter";

class Table extends Component{
    render(){
        let items = this.props.items
        return(
            <div>
                <h3><strong>{this.props.title}</strong></h3>
                <hr />
                <table className="table">
                    <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Qty Needed</th>
                        <th>Avail</th>
                        <th>Price</th>
                    </tr>
                    {
                        items.map((item,i) =>
                            <tr key={item.description+i}>
                                <td key={item.description}>{item.description}</td>
                                <td key={item.description+' '+i}><Counter /></td>
                                <td key={item.available}>{item.available}</td>
                                <td key={item.price}>{item.price}</td>
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