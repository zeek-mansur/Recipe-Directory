import { ThemeContext } from '../context/ThemeContext'
import React, { useContext } from 'react'

export const useTheme = ( () => {

    const context = useContext(ThemeContext)

    if (context === undefined) {

        throw new Error ('useTheme() must be use inside a ThemeProvider')
    }

    return context
})