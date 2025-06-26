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
   className={`w-full h-[500px] flex flex-col justify-center bg-cover bg-no-repeat bg-center px-10 py-20 rounded-3xl mt-5 mb-10 shadow-xl/20`}
   >
    <div className="content text-white h-full flex flex-col ">
        <h2 className=" text-5xl mb-2.5">{featuredMovie.title}</h2>
        <p className="max-w-[500px]">{featuredMovie.overview}</p>
    </div>
    <div className="flex flex-row">
      <Link href={`/movie/${featuredMovie.id}`} className="mr-5 px-8 py-4 rounded-3xl bg-neutral-200 font-bold text-stone-950 " >More Info</Link>
      <div className="px-8 py-4 rounded-3xl border border-neutral-200 text-neutral-200 font-normal">Watch Trailer</div>
    </div>
   </section>
  )
}

export default Hero