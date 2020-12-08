import { GET_FILM_INFO } from "../types"

const initialState = {
    film: {}
}

export const filmInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILM_INFO:
            return{
                ...state,
                film: action.payload
            }
        default: return state
    }
}