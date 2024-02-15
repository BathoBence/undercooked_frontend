import './RecipeList.css';
import { useState, useEffect } from "react";

import RecipeInfo from './../../Components/RecipeInfo/RecipeInfo';

async function fetchRecipes() {
  const response = await fetch("/api/recipes/all");
  const recipes = await response.json();
  return recipes;
}

const RecipeList = () => {

  const [allRecipes, setAllRecipes] = useState(null);

  useEffect(() => {
      fetchRecipes()
      .then((recipes) =>{setAllRecipes(recipes)});
   },[])

  return (allRecipes ? 
    <div className='center_list'>
    {allRecipes.map((recipe) => {
      return <RecipeInfo key={recipe.id} recipe={recipe}/>;
    })}
  </div> :
  <div>valami</div>
  )
}

export default RecipeList;