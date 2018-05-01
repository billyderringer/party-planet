import React, {Component} from 'react'
import './Inventory.css'
import Counter from "./Counter"

class Table extends Component{
    constructor(props) {
        super(props)
        this.state={
            currentCount: 0
        }
    }

    render(){
        let items = this.props.items
        return(
            <div>
                {console.log(items)}
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
                        items.map((item,i) =>
                            <tr key={item.description+i}>
                                <td className="description"
                                    key={item.description}>{item.description}</td>
                                <td className="table-counter"
                                    onChange={this.handleChange}
                                    key={item.description+' '+i}>
                                    <Counter
                                        identity={this.props.identity}
                                        position={i}
                                        item={item.needed}
                                    />
                                </td>
                                <td className="available"
                                    key={item.available}>{item.available}</td>
                                <td className="price"
                                    key={item.price}>{item.price}</td>
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