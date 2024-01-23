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

    const ingredientList = () => {
        let count = 1;
        let ingred = "strIngredient1"
        let measure = "strMeasure1"

        const ingredList = [];
        const measureList = [];

        while(drink[ingred]) {
            ingredList.push(drink[ingred]);
            count++;
            ingred = "strIngredient" + count
        }
        
        return(
            <div>
                {ingredList.map((eachIng) => {
                    return(
                        <div key={eachIng}>
                            <p>{eachIng}</p>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div>
            <div>
                <h3>{drink.strDrink}</h3>
                <h4>{drink.category}</h4>
                <img src={drink.strDrinkThumb} alt="drink thumbnail"/>
            </div>
            <hr/>
            <h2>Ingredients</h2>
            {ingredientList()}
            <hr/>
            <h2>Instructions</h2>
            <hr/>
            <div>
                <p>{drink.strInstructions}</p>
            </div>
        </div>
    )
}

export default Drink