import constants from './constants'

const actions = {
    updateCounterProperty: (identity,position,count,currentAvailable) => {
        return { type: constants.UPDATE_NEEDED_PROPERTY, identity,position,count,currentAvailable }
    }
}

export default actions