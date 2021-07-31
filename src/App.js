import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {
  const APP_ID = "8d5395c8";
  const APP_KEY = "6962b2171332ed110a81f82a2b940e77";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes(search);
  }, []);

  const getRecipes = async (query) => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    getRecipes(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {
        recipes.map(dish => 
          (
          <Recipe
            name={dish.recipe.label}
            dishType={dish.recipe.dishType}
            image={dish.recipe.image}
            ingredients={dish.recipe.ingredientLines}

          />
        ))
      }
    </div>
  );
};

export default App;
