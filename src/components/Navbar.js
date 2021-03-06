import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [user, setUser] = useState()


    useEffect(() =>{
        fetch('https://www.themoviedb.org/authenticate/0856050f9a4d4d0e1cddbeb9f57dd332')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setUser(result)
            })
    })

    return(
        <div className="fixed-top">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <button className="btn btn-danger">Авторизация</button>
        </nav>
      </div>
    )
}

export default Navbar