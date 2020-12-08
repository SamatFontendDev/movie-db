import { apiKey } from "../../config"
import { GET_POUPULAR_FILMS } from "../types"

export const getPopularFilmsAction = () => {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&&sort_by=popularity.asc`)
            .then(res => res.json())
            .then(result => {
                dispatch({
                    type: GET_POUPULAR_FILMS,
                    payload: result
                })
            })
    }
}