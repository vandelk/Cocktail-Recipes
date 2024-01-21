import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            .then(res => {
                setCategory(res.data.drinks)
            })
            .catch(error => console.log("API error", error));
    }, [category]);

    const viewCat = (catName) => {
        navigate('/categories/' + catName)
    }

    return (
        <div>
            {category.map((drinkCategory) => {
                return (
                    <div key={drinkCategory.strCategory} onClick={ () => viewCat(drinkCategory.strCategory)}>
                        <h1>{drinkCategory.strCategory}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Dashboard