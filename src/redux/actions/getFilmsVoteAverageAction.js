import { apiKey } from "../../config"
import { GET_FILMS_VOTE_AVERAGE } from "../types"

export const getFilmsVoteAverage = () => {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&&sort_by=vote_average.desc`)
        .then(res => res.json())
        .then(result => {
            dispatch({
              type: GET_FILMS_VOTE_AVERAGE,
              payload: result
            })
        })
      }
}