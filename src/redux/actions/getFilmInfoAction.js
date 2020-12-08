import { apiKey } from "../../config"
import { GET_FILM_INFO } from "../types"

export const getFilmInfoAction = id => {
    return async dispatch => {
        const response = fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`)
        const json = await response.json()
        dispatch({
           type: GET_FILM_INFO,
           payload: json
        })
    }
}