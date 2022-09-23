import React from 'react'
import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'


export default function Recipe() {

  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const {data: recipe, isPending, error} = useFetch(url)
  
  return (
    <div className='recipe'>
      {isPending && <p className='loading'> Loading...</p>}
      {error && <p className='error'>{error}</p> }
      {recipe && <h1>{recipe.title}</h1>} 
    </div>
  )
}


