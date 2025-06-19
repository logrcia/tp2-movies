'use client'
import { useAppContext } from "@/app/contexts/AppContext"

const FavoritesContainer = () => {
    const{favorites} = useAppContext()
  return (
    <div>
        {favorites.map((movie)=><div key={movie.id}>
            <h2>{movie.title}</h2>
        </div>)}
    </div>
  )
}

export default FavoritesContainer