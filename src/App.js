import React from 'react'
import { Route } from 'react-router-dom'
import FilmDetail from './components/FilmDetail';
import FilmsList from './components/FilmsList'

const App = () => {
  return (
    <div className="App">
        <div className="container">
            <Route exact path='/' component={FilmsList} />
            <Route exact path='/:id' component={FilmDetail} />
        </div>
    </div>
  );
}

export default App;
