import React from 'react';
import { Card } from './styles';

const Recipe = (props) => {
    const getMealType = () => {
        const mealTypeStr = props.mealType.join(", ");
        return mealTypeStr;
    }
    return (
        <Card>
            <h2>{props.name}</h2>
            {props.mealType && <p>{getMealType()}</p>}
            <p>{props.calories}</p>
            <p>{props.healthLabels}</p>
            <img src={props.image} alt={`${props.name}`}/>
            <p>{props.dishType}</p>
            <ul>
                {
                  props.ingredients.map(ingredient =>
                    (
                      <li>{ingredient}</li>
                    ))
                }
            </ul>
        </Card>
    )
}

export default Recipe;