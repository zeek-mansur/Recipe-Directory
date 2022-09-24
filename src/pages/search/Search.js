import React from 'react'
import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList'
import { useFetch } from '../../hooks/useFetch'

// style
import './Search.css'

export default function Search() {

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:3000/recipes?q=' + query

  const {error, isPending, data} = useFetch(url)

  return (
    <div>
      {isPending && <p className='loading'> Loading...</p>}
      <h2 className='page-title'> Recipes including "{query}"</h2>
      {error && <p className='loading'>Loading..</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}


