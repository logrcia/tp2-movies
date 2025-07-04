'use client'
import Image from "next/image"
import Link from "next/link";
import { useAppContext } from "@/app/contexts/AppContext";

const MovieCard = ({title, image, id, date, rating}) => {
  const {handleAddToFavorites, favorites} = useAppContext()

  const isFavorite = favorites.some(fav => fav.id == id)
  const toggleFavorite = () => {
    handleAddToFavorites (title, image, id)
  }

    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
    const releaseYear = date ? date.slice(0, 4) : 'N/A';

  return (
    <div className="bg-stone-950 text-white p-5 w-[300px] h-[600px] rounded-3xl flex-shrink-0 shadow-xl/20 ">
      <div className="relative">
      <button className="absolute top-2 right-2 z-10 bg-blue-950 p-2 rounded-full cursor-pointer"
      onClick={toggleFavorite}
      >
        <Image
          src={isFavorite ? "/assets/favorite-full.svg" : "/assets/favorite-null.svg"}
          alt="Add to favorites"
          width={36}
          height={36}
        />
      </button>
      </div>
    <Link href={`/movie/${id}`}>
        <Image 
        className="rounded-3xl"
        src={`${imageBaseUrl}${image}`}
        width={300}
        height={450}
        alt={title}
        id={id}
        />
      <div className="flex flex-col justify-between h-[100px]">
        <h3 className="text-2xl font-bold mt-2 ">{title}</h3>
        <div className="flex flex-row justify-between">
          <h3 className="text-lg ">{releaseYear}</h3>
          <h3 className="text-lg "><span className="text-orange-400">★</span> {rating}</h3>
        </div>
      
      </div>
    </Link>
      
    </div>
    
  )
}

export default MovieCard