import { apiKey } from "../../config"
import { GET_NEW_FILMS } from "../types"

export const getNewFilmsAction = () => {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&&sort_by=release_date.desc`)
            .then(res => res.json())
            .then(result => {
                dispatch({
                    type: GET_NEW_FILMS,
                    payload: result
                })
            })
    }
}