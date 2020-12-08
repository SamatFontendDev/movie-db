import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiKey, imageDomainPath } from '../config'


const FilmDetail = () => {
    const [info, setInfo] = useState({})

    const {id} = useParams()
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`)
            .then(res => res.json())
            .then(result => {
                setInfo(result)
            })
    }, [])
    
    return(
        <div className="pt-2 pb-2">
           
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{info.title}</h5>
                        <p className="card-text">{info.overview}</p>
                    </div>
                    <img src={`${imageDomainPath}${info.poster_path}`} className="card-img-bottom" alt="..."/>
                </div>
                <div className="mb-2 mt-2">
                    
                </div>
        </div>
        
    )
}

export default FilmDetail