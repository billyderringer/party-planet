import React from 'react'
import {connect} from 'react-redux'
import Table from "./Table";

function InventoryForm(props) {
    return (
        <div className="row">
            <div className="col-12">
                <h2>Inventory</h2>
            </div>
            <div className="col-12 inventory-table">
                <Table title="Tables" items={props.tables} />
                <Table title="Chairs" items={props.chairs} />
                <Table title="Bounce Houses" items={props.bounce} />
                <Table title="Misc." items={props.misc} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        bounce: state.inventoryReducer.bounce,
        chairs: state.inventoryReducer.chairs,
        tables: state.inventoryReducer.tables,
        misc: state.inventoryReducer.misc
    }
}

export default connect(mapStateToProps)(InventoryForm)