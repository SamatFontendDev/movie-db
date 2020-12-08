import React from 'react'
import { Link } from 'react-router-dom'

const FilmItem = ({info}) => {
    const imageDomainPath = 'https://image.tmdb.org/t/p/w500/';

    return(
       <div className="col-md-3 mb-2">
            <div className="card pos-rel">
                <svg className="heart" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 437.775 437.774">
                    <g>
                        <path d="M316.722,29.761c66.852,0,121.053,54.202,121.053,121.041c0,110.478-218.893,257.212-218.893,257.212S0,266.569,0,150.801
                            C0,67.584,54.202,29.761,121.041,29.761c40.262,0,75.827,19.745,97.841,49.976C240.899,49.506,276.47,29.761,316.722,29.761z"/>
                    </g>
                </svg>
                <img src={`${imageDomainPath}${info.poster_path}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{info.name || info.original_title}</h5>
                    <Link to={`/${info.id}`}>Детально</Link>
                </div>
            </div>
       </div>
    )
}

export default FilmItem