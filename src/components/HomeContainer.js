'use client'
import {useState, useEffect} from 'react'
import axios from "axios"
import Hero from "@/components/Hero"
import MoviesGrid from '@/components/MoviesGrid'

const HomeContainer = () => {

  //fetch de movies
  const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=8d9b20de125422437b2d09d5dbd23ddf`
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
      const getMovies = async () => {
        setLoading(true)
        try{
          const response = await axios.get(API_URL);
          const moviesData = response.data.results //lo q va dp de data depende de la api
          setMovies(moviesData)
          console.log(moviesData)
          setLoading(false) //una vez q cargan las movies se termina el loading
        }catch(error){

        }
      }
      getMovies();
  },[])


  return (
    <div className='mx-10'>
        {!loading && <Hero movies={movies} />}
        {loading && "Loading..."}
        <section>
            <h2 className="text-3xl font-bold text-white">Trending Movies this week</h2>
            <MoviesGrid movies={movies}/>
        </section>
    </div>
  )
}

export default HomeContainer