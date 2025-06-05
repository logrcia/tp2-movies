'use client'
import {useState, useEffect} from 'react'
import MovieCard from '@/components/MovieCard'


const MoviesContainer = () => {
    
    const [dataMovie, setDataMovie] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try{
                setLoading(false)
                const response = await fetch (`https://api.themoviedb.org/3/trending/movie/day?api_key=8d9b20de125422437b2d09d5dbd23ddf`);
                const data = await response.json();
                setDataMovie(data.results); 
                console.log(data.results);
            }catch(error){
                console.log("Mi error fue ", error);
                setError(error.message);
            }
        };
        getData();
    }, []);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {!loading && dataMovie.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} image={movie.poster_path} id={movie.id} />
      ))}
      {loading && "Loading..."}
      {error && "HUBO UN ERROR"}
</div>
    
  )
}

export default MoviesContainer