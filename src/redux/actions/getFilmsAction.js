import { apiKey } from "../../config"
import { GET_FILMS_SUCCESS } from "../types"

export const getFilmsAction = () => {
  return dispatch => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(res => res.json())
    .then(result => {
        dispatch({
          type: GET_FILMS_SUCCESS,
          payload: result
        })
    })
  }
}