import DisplayMovies from "./DisplayMovies"
import {useEffect, useState} from 'react'
import "./SearchMovies.css"

export default function SearchMovies() {
    const [searchText, setSearchText] = useState("")
    const [films, setFilms] = useState({})

    function handleClick() {
        console.log('click handled')
        fetch(`http://www.omdbapi.com/?apikey=37fe945a&type=movie&s=${searchText}`)
            .then(res => res.json())
            .then(data => setFilms(data))
    }

    return (
        <>
            <div className="search-part">
                <input 
                    value={searchText}
                    placeholder="Search movie..."
                    onChange={e => setSearchText(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleClick()}
                />
                <button onClick={handleClick}>
                    Search
                </button>
            </div>
            <DisplayMovies films={films} />
            <footer className="footer">
                <p><small>Footer. Denna håller sig längst ner på sidan.</small></p>
            </footer>
        </>
        
    )
}