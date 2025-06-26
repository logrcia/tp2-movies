'use client'
import {useState, useEffect, useContext, createContext} from 'react'

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
  const[favorites, setFavorites] = useState([]);
  
  //aca va mi logica y funciones custom

  useEffect(()=>{
    console.log(favorites)
  },[favorites])

  const handleAddToFavorites = (title, image, id) => {
    //el .some verifica si al menos un elemento cumple una condición, devuelve true o false
    const isFavorite = favorites.some(movie => movie.id === id)
    if(isFavorite){
      //prev es el estado actual de favorites en el momento de actualizarlo
      setFavorites(currentFavorites => currentFavorites.filter(movie => movie.id !== id))
    }else{
      setFavorites(currentFavorites => [...currentFavorites, { title, image, id }])
    }
  };

  const favoritesQty = () => favorites.length

  return(
    <AppContext.Provider
      value= {{
        favorites,
        handleAddToFavorites,
        favoritesQty
      }}
    >
      {children}
    </AppContext.Provider>

  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if(!context){
    throw new Error ('useAppContext must be used within a AppContextProvider')
  }
  return context;
}