import constants from './constants'

const actions = {
    updateCounterProperty: (identity,position,count,currentAvailable,operation) => {
        return { type: constants.UPDATE_NEEDED_PROPERTY, identity,position,count,currentAvailable,operation }
    },
    updateAvailability: () => {
        return { type: constants.UPDATE_AVAILABILITY }
    },
    returnItems: (itemArray) => {
        return { type: constants.UPDATE_AVAILABILITY, itemArray }
    }
}

export default actions