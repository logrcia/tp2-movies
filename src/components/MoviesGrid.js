import MovieCard from '@/components/MovieCard'


const MoviesGrid = ({movies}) => {


  return (
    <div className="flex overflow-x-auto gap-6 mb-5 mt-5 h-[650px]">
        {movies.map((movie) => (
            <MovieCard genre={movie.genre_ids} key={movie.id} title={movie.title} image={movie.poster_path} id={movie.id} date={movie.release_date} rating={movie.vote_average}/>
      ))}
</div>
    
  )
}

export default MoviesGrid