import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark rounded p-2">  
        <Link 
            className="navbar-brand" 
            to="/"
        >
            Pokédex
        </Link>
    </nav>
  )
}
