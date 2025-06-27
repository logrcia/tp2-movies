'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import MovieDetails from "./MovieDetails"
import Image from "next/image"
import { useAppContext } from "@/app/contexts/AppContext";

const MovieContainer = ({id}) => {

  
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500"
  const [movie, setMovie] = useState({}) //uso llaves xq movie es un objeto, no un array
  const {handleAddToFavorites, favorites} = useAppContext()
  const isFavorite = favorites.some(favMovie => favMovie.id === id)
  
  const toggleFavorite = () => {
    handleAddToFavorites (movie.title, movie.poster_path, id)
  }
  useEffect(() => {
    const getData = async () => {
      try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8d9b20de125422437b2d09d5dbd23ddf`);
        setMovie(response.data)
        console.log(setMovie);
      }catch(error){
        console.log("Mi error fue ", error);
      }
    };
    getData();
  }, []);

  const date = new Date(movie.release_date);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  return (
    <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}
      className=" relative bg-no-repeat bg-center bg-cover h-[900px]">

      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 to-transparent h-full"></div>

    <div className="flex">
      <div className="relative z-10 p-10 flex flex-row text-white h-full w-[100%] justify-between">
        <div>
      

        <p className="text-base font-normal mt-[80px]">{formattedDate}</p>
        <h1 className="text-5xl font-bold mt-4 mb-4">{movie.title}</h1>

        <p className="mt-2 mb-2 max-w-xl">{movie.overview}</p>

        <p className="mt-4 mb-4">{String(movie.runtime)[0]}h {String(movie.runtime).slice(1)}min</p>

        <div className="mb-16 flex items-center">
          <p className="text-2xl mr-1.5"><span className="text-orange-400 ">★</span> {movie.vote_average}</p>
          <p className="text-gray-300 text-xl">({movie.vote_count})</p>
        </div>

        <MovieDetails movie={movie} />
         </div>
      
     
      </div>
      <button className="absolute top-2 right-2 z-10 bg-blue-950 p-2 rounded-full cursor-pointer"
        onClick={toggleFavorite}>
          <Image
            src={isFavorite ? "/assets/favorite-full.svg" : "/assets/favorite-null.svg"}
            alt="Add to favorites"
            width={36}
            height={36}
          />
        </button>
    </div>
    </div>
  )
}

export default MovieContainer