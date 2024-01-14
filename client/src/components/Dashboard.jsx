import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Dashboard = (props) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            .then(res => {
                setCategory(res.data.drinks)
            })
            .catch(error => console.log("API error", error));
    }, [category]);

    return (
        <div>
            {category.map((drinkCategory) => {
                return (
                    <div key={drinkCategory.strCategory}>
                        <h1>{drinkCategory.strCategory}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Dashboard