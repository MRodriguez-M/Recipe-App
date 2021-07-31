import React from 'react';

const Recipe = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
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
        </div>
    )
}

export default Recipe;