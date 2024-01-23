import { useState } from 'react'
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Ingredient from './components/Ingredient'
import Category from './components/Category'
import Drink from './components/Drink'
import Logo from './assets/site-logo.png'
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className='m-4'>
        <div>
          <img src={Logo} alt="Cocktail Recipe Logo" height="75" onClick={() => navigate('/')} />
          <Link to="/categories">Categories</Link>
          <Link to="/ingredients">Alcohols</Link>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to='/categories' />} />
          {/* DASHBOARD*/}
          <Route path="/categories" element={<Dashboard />} />
          <Route path="/categories/:name" element={<Category />} />
          <Route path="/categories/:name/:secondary" element={<Category />} />

          <Route path="/ingredients" element={<Ingredient />} />

          <Route path="/:drinkName" element={<Drink />} />
        </Routes>
      </div>
    </>
  )
}

export default App
