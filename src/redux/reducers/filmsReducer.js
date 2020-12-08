import { GET_FILMS_SUCCESS, GET_FILMS_VOTE_AVERAGE, GET_NEW_FILMS, GET_POUPULAR_FILMS } from "../types"

const initialState = {
    films: []
}

export const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILMS_SUCCESS:
            return{
                ...state,
                films: action.payload.results
            }
        case GET_POUPULAR_FILMS: {
            return{
                ...state,
                films: action.payload.results
            }
        }
        case GET_NEW_FILMS: {
            return{
                ...state,
                films: action.payload.results
            }
        }
        case GET_FILMS_VOTE_AVERAGE:
            return{
                ...state,
                films: action.payload.results
            }
        default: return state
    }
}