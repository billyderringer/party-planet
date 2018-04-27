import constants from './constants'

const actions = {
    setInventoryCount: (inventoryCount) => {
        return {
            type: constants.SET_INVENTORY_COUNT, inventoryCount
        }
    }
}

export default actions