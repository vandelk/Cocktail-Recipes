import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Category = (props) => {
    const [catDrinks, setCatDrinks] = useState([]);
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`)
            .then( res => {
                setCatDrinks(res.data.drinks)
            })
            .catch(err => console.log(err))
    },[]);

    const getDrink = (drinkName,drinkId) => {
        navigate(`/categories/${name}/${drinkName}`, {state: {id: drinkId}});
    }

    return (
        <div>
            <h1>{name}</h1>
            {catDrinks.map((eachDrink) => {
                return (
                    <div key={eachDrink.idDrink} onClick={() => getDrink(eachDrink.strDrink,eachDrink.idDrink)}>
                        <h3>{eachDrink.strDrink}</h3>
                    </div>
                )
            })}
        </div>

    )
}

export default Category