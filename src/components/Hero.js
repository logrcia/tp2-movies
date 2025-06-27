'use client'
import Link from "next/link"
import { useState } from "react"
const Hero = ({movies}) => {
    const bkg = movies[0].backdrop_path
    const [featuredMovie, setFeaturedMovie] = useState(movies[0])
  return (
   <section 
   style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path})`
    }} 
   className={`w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] flex flex-col justify-center bg-cover bg-no-repeat bg-center px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20 rounded-xl sm:rounded-2xl md:rounded-3xl mt-3 sm:mt-4 md:mt-5 mb-6 sm:mb-8 md:mb-10 shadow-xl/20 relative`}
   >
    <div className="absolute inset-0 bg-black/30 rounded-xl sm:rounded-2xl md:rounded-3xl"></div>
    <div className="content text-white h-full flex flex-col relative z-10 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-2.5 font-bold leading-tight">{featuredMovie.title}</h2>
        <p className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-[500px] text-sm sm:text-base mb-4 sm:mb-6">{featuredMovie.overview}</p>
    </div>
    <div className="flex flex-row">
      <Link href={`/movie/${featuredMovie.id}`} className="relative z-10 mr-5 px-8 py-4 rounded-3xl bg-neutral-200 font-bold text-stone-950 " >More Info</Link>
      
    </div>
   </section>
  )
}

export default Hero