import constants from './constants'

const actions = {
    updateCounterProperty: (identity,position,count) => {
        return { type: constants.UPDATE_NEEDED_PROPERTY, identity,position,count }
    }
}

export default actions