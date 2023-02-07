import './MovieCard.css'

export default function MovieCard({film}) {
    console.log(film)

    return (
        <p>{film.Title}</p>
    )
}