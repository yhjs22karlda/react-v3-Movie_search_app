import DisplayMovies from "./DisplayMovies"
import {useState} from 'react'
import "./SearchMovies.css"

export default function SearchMovies() {
    const [searchText, setSearchText] = useState("")
    const [films, setFilms] = useState({})

    function handleClick() {
        console.log('click handled')
        fetch(`http://www.omdbapi.com/?apikey=37fe945a&s=${searchText}`)
            .then(res => res.json())
            .then(data => setFilms(data))
        // console.log(films)
    }

    return (
        <>
            <input 
                value={searchText}
                placeholder="Search..."
                onChange={e => setSearchText(e.target.value)}
                onKeyDown={e => e.key==="Enter" && handleClick()}
            />
            <button onClick={handleClick}>
                Search
            </button>
            <DisplayMovies films={films} />
        </>
        
    )
}