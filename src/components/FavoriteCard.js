'use client'
import Image from "next/image"
import { useAppContext } from "@/app/contexts/AppContext"
import Link from "next/link"

const FavoriteCard = ({movie}) => {

    const{ handleAddToFavorites} = useAppContext()
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="flex flex-col justify-between bg-stone-950 text-white m-3 p-5 w-[300px] h-[550px] rounded-3xl flex-shrink-0 shadow-xl/20">
        <Link href={`/movie/${movie.id}`}>
        <Image
            src={`${imageBaseUrl}${movie.image}`}
            width={300}
            height={450}
            alt={movie.title}
        />
        </Link>
        <div>
        <h2 className="text-2xl font-bold mt-2">{movie.title}</h2>
        <button
            className=" rounded-3xl border border-neutral-200 text-neutral-200 hover:bg-stone-50 hover:text-black transition duration-300 w-[100%] py-2  mt-2"
            onClick={() => handleAddToFavorites(movie.title, movie.image, movie.id)}
        >
            Quitar de favoritos
          </button>
        </div>
    </div>
  )
}

export default FavoriteCard