'use client'
import { useAppContext } from "@/app/contexts/AppContext"
import FavoriteCard from "./FavoriteCard"

const FavoritesContainer = () => {
    const{favorites} = useAppContext()
   
  return (
    <div className="flex flex-row overflow-x-auto gap-6 h-[650px]">
        {favorites.length > 0 ? (
            favorites.map((movie) => (
                <FavoriteCard key={movie.id} movie={movie}/>
            ))
        ) : (
            <div className="flex flex-col items-center justify-center w-full h-full text-white">
                <h2 className="text-2xl font-bold mb-2">No tienes películas favoritas aún</h2>
                <p className="text-lg text-center max-w-md">
                    Explora nuestra colección de películas y agrega tus favoritas haciendo clic en el corazón
                </p>
            </div>
        )}
    </div>
  )
}

export default FavoritesContainer