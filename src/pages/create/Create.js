
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'

// styles
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const[ingedrients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const navigate = useNavigate()

 

  const handleSubmit = async (e) => {
    e.preventDefault()
    const doc = {title, ingedrients, method, cookingTime: cookingTime + ' minutes'}

    try{
   await projectFirestore.collection('recipes').add(doc)

   navigate.push('/')
} catch(err) {
  console.log(err)
}
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingedrients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
      setNewIngredient('')
      ingredientInput.current.focus()
  }

  // redirect the user when we get a data response 


  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>


      <form onSubmit={handleSubmit}>

        <label>
          <span>Recipe title:</span>
          <input type='text'
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
          required 
          />
          
           <label>
            <span>Recipe ingredients:</span>
            <div className='ingredients'>
              <input type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value = {newIngredient}
              ref ={ingredientInput} 
              />
              <button onClick={handleAdd} className='btn'>add</button>
            </div>
           </label>
           <p>Current Ingredients: {ingedrients.map(i => <em key={i}>{i},</em>)}</p>

        </label>
        <label>
          <span>Recipe method:</span>
          <textarea 
          onChange={(e) => setMethod(e.target.value)}
          value = {method}
          required 
          />

          <label>
            <span>Cooking time (Minutes):</span>
            <input type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
            />
          </label>
        </label>

        <button className='button'>Submit</button>

      </form>
    </div>
  )
}
