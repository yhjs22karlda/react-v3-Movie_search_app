import './MovieCard.css'
import noPic from './../assets/nophoto.png'

export default function MovieCard({film}) {
    console.log("card",film)

    return (
        <div className='movieCard'>
            <a href={film.Poster} target="_blank">
                <img src={film.Poster === "N/A"? noPic : film.Poster} alt={film.Title} />
            </a>
            <p>{film.Title}, {film.Year} - <a
                href={`https://imdb.com/title/${film.imdbID}`}
                target="_blank">[imdb]</a>
            </p>

        </div>
    )
}