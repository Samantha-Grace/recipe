import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "4148f2d8";
  const APP_KEY = "8016e29967cbd585e3271012905f24ca";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, [search]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="App">
      <form className="search-forum">
        <input
          className="seach-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
