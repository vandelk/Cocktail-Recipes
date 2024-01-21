import React from 'react'
import { useParams } from 'react-router-dom'

const Drink = (props) => {
    const {drinkName } = useParams();

    return (
        <div>Drink</div>
    )
}

export default Drink