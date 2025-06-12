import MovieContainer from '@/components/MovieContainer'
import React from 'react'

const Movie = async ({params}) => {
    const {id} = await params
  return (
    <MovieContainer id={id}/>
  )
}

export default Movie