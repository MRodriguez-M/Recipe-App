import React from 'react';

const Recipes = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.dishType}</p>
            <img src={props.image}/>
        </div>
    )
}

export default Recipes;