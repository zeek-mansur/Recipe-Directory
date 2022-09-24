

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import './Navbar.css'

//component
import Searchbar from './Searchbar'

export default function Navbar() {
  const {color} = useContext(ThemeContext)

  return (
    <div className='navbar' style={{background: color}}>
      <nav>
        <Link to ="/" className='brand'>
                <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to ="/create">Create Recipe</Link>

      </nav>
    </div>
  )
}
