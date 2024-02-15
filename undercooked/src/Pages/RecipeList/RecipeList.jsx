import { useState, useEffect } from "react";

import RecipeInfo from './../../Components/RecipeInfo/RecipeInfo'
import Loading from "../Loading/Loading";


async function fetchRecipes() {
  return await fetch("/recipes/all");
}

const RecipeList = () => {

  const [allRecipes, setAllRecipes] = useState(null);

  useEffect(() => {
    async () => {
      const recipes = await fetchRecipes();
      setAllRecipes(recipes);
    }
  })
  return ( allRecipes ? 
    <div>
    {allRecipes.map((recipe => {
      <RecipeInfo recipee={recipe}/>
    }))}
  </div> :
  <Loading />
  )
   
  
}

export default RecipeList;