import { actionsTypes } from "./actionsType"

// Making initial state
const INITIAL_STATE = {
    count: 0
}


export const countReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionsTypes.INCREMENT: 
            return {...state, count: state.count + 1}
        case actionsTypes.DECREMENT:
            return {...state, count: state.count - 1}
        default:
            return state;
    }
}

