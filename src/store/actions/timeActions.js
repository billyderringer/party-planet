import constants from './constants'

const actions = {
    updateTime: (name,value) => {
        return { type: constants.SET_TIME, name,value }
    }
}

export default actions