import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Drink = (props) => {
    const [drink, setDrink] = useState([]);
    const { drinkName } = useParams();

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${history.state.usr.id}`)
            .then(res => {
                setDrink(res.data.drinks[0])
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h3>{drink.strDrink}</h3>
            <img src={drink.strDrinkThumb} alt="drink thumbnail"/>
            <h4>{drink.category}</h4>
            <h2>Instructions</h2>
            <hr/>
            <div>
                <p>{drink.strInstructions}</p>
            </div>
        </div>
    )
}

export default Drink