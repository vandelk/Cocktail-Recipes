import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

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
        <div className='container-fluid d-flex row'>
            {category.map((drinkCategory) => {
                return (
                    <div className='d-flex justify-content-between' key={drinkCategory.strCategory}>
                        <Card onClick={ () => viewCat(drinkCategory.strCategory)}>
                            <Card.Body>
                                <h1>{drinkCategory.strCategory}</h1>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default Dashboard