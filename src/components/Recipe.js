import React from 'react';
import { Card } from './styles';

const Recipe = (props) => {
  const getMealType = () => {
    const resultArr = [];
    for (let i = 0; i < props.mealType.length; i++) {
      const tempArr = props.mealType[i].split("/");
      for (let j = 0; j < tempArr.length; j++) {
        tempArr[j] = tempArr[j].charAt(0).toUpperCase() + tempArr[j].slice(1);
      }
      resultArr.push(tempArr.join(", "));
    }  
    return resultArr.join(", ");
  };

  return (
    <Card>
      <h2>{props.name}</h2>
      {props.mealType && <p>Meal Type: {getMealType()}</p>}
      <p>{props.calories.toFixed(2)} kcals</p>
      <p>{props.healthLabels[0]} | {props.healthLabels[1]} | {props.healthLabels[2]}</p>
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