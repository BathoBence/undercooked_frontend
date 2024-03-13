import './RecipeList.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';


import RecipeInfo from './../../Components/RecipeInfo/RecipeInfo'


async function fetchRecipes() {
  const response = await fetch("/api/recipes/all");
  const recipes = await response.json();
  return recipes;
}

const RecipeList = () => {

  const [allRecipes, setAllRecipes] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes()
      .then((recipes) => { setAllRecipes(recipes) });
  }, [])

  const handleChoose = (recipeId) => {
    navigate(`/recipes/${recipeId}`)
  }

  return (allRecipes ?
    <div className='center_list'>
      {allRecipes.map((recipe) => {
        return <RecipeInfo key={recipe.id} recipe={recipe} onChoose={handleChoose} />;
      })}

    </div> :
    <div>valami</div>
  )
}

export default RecipeList;