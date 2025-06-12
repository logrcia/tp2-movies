'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import MovieDetails from "./MovieDetails"
import Link from "next/link"

const MovieContainer = ({id}) => {

  const [movie, setMovie] = useState({}) //uso llaves xq movie es un objeto, no un array

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
      className=" relative bg-no-repeat bg-center bg-cover h[900px]">

      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 to-transparent h-full"></div>

      <div className="relative z-10 p-10 text-white h-full">

        <Link href={"/"} className="p-4 bg-stone-50 text-stone-950 font-bold rounded-2xl">Back to home</Link>
      
        <p className="text-base font-normal mt-[80px]">{formattedDate}</p>
        <h1 className="text-5xl font-bold mt-4 mb-4">{movie.title}</h1>

        <p className="mt-2 mb-2 max-w-xl">{movie.overview}</p>

        <p className="mt-4 mb-4">genre</p>

        <div className="mb-16 flex items-center">
          <p className="text-2xl mr-1.5"><span className="text-orange-400 ">★</span> {movie.vote_average}</p>
          <p className="text-gray-300 text-xl">({movie.vote_count})</p>
        </div>

        <MovieDetails movie={movie} />
        
        
      </div>

    </div>
  )
}

export default MovieContainer