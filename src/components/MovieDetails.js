
const MovieDetails = ({movie}) => {

  return (
    <div>
          <h2 className="font-bold text-2xl">DETAILS</h2>
          <p className="mt-5 mb-5 text-xl font-bold p-2 border w-14 rounded-2xl border-white">{movie.adult ? null : "+18"}</p>
          <p className="mb-5 text-xl">Release date: <span className="font-bold p-2 ">{movie.release_date}</span></p>
          <p className="mb-5 text-xl">Original language: <span className="font-bold p-2">{movie.original_language}</span></p>
          <p className="mb-5 text-xl">Vote Count: <span className="font-bold p-2 ">{movie.vote_count}</span></p>
          <p className="mb-5 text-xl">Popularity: <span className="font-bold p-2">{movie.popularity}</span></p>
        </div>
  )
}

export default MovieDetails