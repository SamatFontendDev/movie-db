import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { apiKey } from '../config'
import { getFilmsVoteAverage } from '../redux/actions/getFilmsVoteAverageAction'
import { getNewFilmsAction } from '../redux/actions/getNewFilmsAction'
import { getPopularFilmsAction } from '../redux/actions/getPopularFilmsAction'

const Form = ({getPopularFilms, getNewFilms, getFilmsVoteAverage}) => {
    const [ganers, setJaners] = useState([])
    const [sortValue, setSortValue] = useState('')

    const onChangeInput = e => {
        if (e.target.value === 'option1') {
            getPopularFilms()
        }
        else if (e.target.value === 'option2') {
            getFilmsVoteAverage()
        }
        else if (e.target.value === 'option3') {
            getNewFilms()
        }
    }

    useEffect(() => {
        try {
            fetch(`https://developers.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
            .then(res => res.json)
            .then(result => {
                setJaners(result)
            })
        } catch (error) {
            console.log(error);
        }
           
    }, [])

    return(
        <div className="form mb-2">
            <div className="row">
                <div className="col-md-6">
                    <h4>Сортировать</h4>
                    <div className="form-check form-check-inline">
                        <input
                        onChange={onChangeInput}
                         className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">по популярности</label>
                    </div>
                        <div className="form-check form-check-inline">
                        <input 
                        onChange={e => onChangeInput(e)}
                        className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">по рейтингу</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                        onChange={e => onChangeInput(e)}
                        className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                        <label className="form-check-label" htmlFor="inlineRadio3">по новизне</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Жанры</h4>
                    <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option disabled>Выберите жанр</option>
                            <option>Комедии</option>
                            <option>Боевики</option>
                            <option>Ужасы</option>
                            <option>Драмы</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    getPopularFilms: getPopularFilmsAction,
    getNewFilms: getNewFilmsAction,
    getFilmsVoteAverage: getFilmsVoteAverage
}

export default connect(null, mapDispatchToProps)(Form)