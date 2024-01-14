import { useState } from 'react'
import {Routes, Route, Link, useNavigate, Navigate} from 'react-router-dom'
import Dashboard from './components/dashboard'
import Ingredient from './components/Ingredient'

import './App.css'

function App() {
  return (
    <>
      <div>
        <h1>Cocktail Recipes</h1>
        <Link to="/categories">Categories</Link>
        <Link to="/alcohol">Alcohols</Link>

        <Routes>
          <Route path="/" element={<Navigate to='/categories'/>}/>
          {/* DASHBOARD*/}
          <Route path="/categories" element={<Dashboard/>}/>

          <Route path="/alcohol" element={<Ingredient/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
