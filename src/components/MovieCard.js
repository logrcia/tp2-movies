import Image from "next/image"

const MovieCard = ({title, image, id}) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="bg-gray-200 m-8 p-4">
        
        <Image 
        src={`${imageBaseUrl}${image}`}
        width={300}
        height={300}
        alt={title}
        id={id}
        />

        <h3 className="text-2xl font-bold text-gray-800 m-4 text-center">{title}</h3>
    </div>
  )
}

export default MovieCard