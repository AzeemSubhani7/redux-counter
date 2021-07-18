import { actionsTypes } from "./actionsType";

export const incrementAction = () => {
    return {
        type: actionsTypes.INCREMENT
    }
}

export const decrementAction = () => {
    return {
        type: actionsTypes.DECREMENT
    }
}