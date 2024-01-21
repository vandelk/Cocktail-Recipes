import { useState } from 'react'
import {Routes, Route, Link, useNavigate, Navigate} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Ingredient from './components/Ingredient'
import Category from './components/Category'
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 onClick={ () => navigate('/')}>Cocktail Recipes</h1>
        <Link to="/categories">Categories</Link>
        <Link to="/ingredients">Alcohols</Link>
      </div>
        <Routes>
          <Route path="/" element={<Navigate to='/categories'/>}/>
          {/* DASHBOARD*/}
          <Route path="/categories" element={<Dashboard/>}/>
          <Route path="/categories/:name" element={<Category/>}/>

          <Route path="/ingredients" element={<Ingredient/>}/>
        </Routes>
    </>
  )
}

export default App
