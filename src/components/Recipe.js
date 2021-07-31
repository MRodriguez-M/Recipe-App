import React from 'react';
import { Card } from './styles';

const Recipe = (props) => {
    return (
        <Card>
            <h2>{props.name}</h2>
            <p>{props.dishType}</p>
            <img src={props.image} alt={`${props.name}`}/>
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