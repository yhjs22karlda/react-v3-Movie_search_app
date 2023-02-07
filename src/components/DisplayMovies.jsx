import {useEffect} from 'react'
import MovieCard from './MovieCard'
import './DisplayMovies.css'

export default function DisplayMovies({films}) {
    // console.log(films)

    let movieList = ""
    
    if(films.Response === "True") {
        movieList = films.Search.map(film => {
            return (
                <MovieCard film={film} key={film.imdbID} />
            )
        })
    } else if(films.Response === "False") {
        movieList = <p>{films.Error}</p>
    }

    return (
        <div className='display-movies'>
            {films.Response === "True" && <h2>Top results:</h2>}
            {movieList}
        </div>
    )
}