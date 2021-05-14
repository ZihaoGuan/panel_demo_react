import * as actionTypes from './actionTypes'
export const turnOnCover = () => {
    return {
        type: actionTypes.TURN_ON_COVER
    }
}

export const turnOffCover = () => {
    return {
        type: actionTypes.TURN_OFF_COVER
    }
}