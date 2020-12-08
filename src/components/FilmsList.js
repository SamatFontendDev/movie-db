import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { apiKey } from '../config'
import { getFilmsAction } from '../redux/actions/getFilmsAction'
import FilmItem from './FIlmItem'
import Form from './Form'
import Loader from './Loader'
import Navbar from './Navbar'

const FilmsList = ({getFilms, films}) => {

    
    useEffect(() => {
      getFilms()
    },[])

    console.log(films);

    return(
        <div className="films">
            <Form/>
            <div className="row">
                {films.length ? films.map(item => <FilmItem key={item.id} info={item} />) : <Loader/>}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    films: state.films.films
})

const mapDispatchToProps = {
    getFilms: getFilmsAction
}


export default connect(mapStateToProps, mapDispatchToProps)(FilmsList)