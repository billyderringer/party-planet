import React from 'react'
import {connect} from 'react-redux'
import Table from "./Table";

function InventoryForm(props) {
    return (
        <div className="row inventory-row">
            <div className="col-12">
                <h2><strong>Inventory</strong></h2>
            </div>
            <div className="col-12 inventory-table">
                <Table title="Tables" identity="tables" items={props.tables} />
                <Table title="Chairs" identity="chairs"  items={props.chairs} />
                <Table title="Bounce Houses" identity="bounce"  items={props.bounce} />
                <Table title="Misc." identity="misc"  items={props.misc} />
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