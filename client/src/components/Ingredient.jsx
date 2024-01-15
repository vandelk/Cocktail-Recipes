import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Ingredient = () => {
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then(res => {
        setIngredient(res.data.drinks)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <h3>Ingredients</h3>
      {ingredient.map((eachIngred) => {
        return (
          <div key={eachIngred.strIngredient1}>
            <h3>{eachIngred.strIngredient1}</h3>
          </div>
        )
      })}
    </div>

  )
}

export default Ingredient