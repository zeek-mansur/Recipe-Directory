import './ThemeSelector.css'

import React from 'react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeSelector() {

    const themeColors = ['#58249c', '#249c6b', '#b70233']

    const {changeColor} = useTheme()
  return (
    <div className='theme-selector'>
        <div className='theme-buttons'>
            {themeColors.map(color => 
                (<div key = {color}
                onClick = {() => changeColor(color)} 
                style={ {background: color}}
                />))}
        </div>
    
    </div>
  )
}
