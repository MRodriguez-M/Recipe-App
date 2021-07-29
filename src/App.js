import React, { useEffect, useState } from 'react';
import './App.css';
import Recipes from './Recipes';

function App() {
  const APP_ID = "8d5395c8";
  const APP_KEY = "6962b2171332ed110a81f82a2b940e77";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <Recipes />
    </div>
  );
};

export default App;
