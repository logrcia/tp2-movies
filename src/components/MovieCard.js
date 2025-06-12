import Image from "next/image"
import Link from "next/link";

const MovieCard = ({title, image, id, date, rating, genre}) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
    const releaseYear = date ? date.slice(0, 4) : 'N/A';
  return (
    <Link href={`/movie/${id}`} className="bg-stone-950 text-white p-5 w-[300px] h-[600px] rounded-3xl flex-shrink-0 shadow-xl/20 hover:opacity-70 transition">
        
        <Image 
        className="rounded-3xl"
        src={`${imageBaseUrl}${image}`}
        width={300}
        height={300}
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
  )
}

export default MovieCard