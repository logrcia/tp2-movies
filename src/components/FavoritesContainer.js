'use client'
import { useAppContext } from "@/app/contexts/AppContext"
import FavoriteCard from "./FavoriteCard"

const FavoritesContainer = () => {
    const{favorites} = useAppContext()
  return (
    <div className="flex flex-row overflow-x-auto gap-6">
        {favorites.map((movie)=><div key={movie.id}>
            <FavoriteCard movie={movie}/>
        </div>)}
    </div>
  )
}

export default FavoritesContainer