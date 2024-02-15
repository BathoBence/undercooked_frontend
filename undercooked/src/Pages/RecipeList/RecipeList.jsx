import './RecipeList.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';


// import RecipeInfo from './../../Components/RecipeInfo/RecipeInfo'
import Loading from "../Loading/Loading";


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
      .then((recipes) =>{setAllRecipes(recipes)});
   },[])

  return (allRecipes ? 
    <div className='center_list'>
    {allRecipes.map((recipe) => {
      return <RecipeInfo key={recipe.id} recipe={recipe} onClick={() => navigate(`/recipes/${recipe.id}`)}/>;
    })}

  </div> :
  <div>valami</div>
  )
}

export default RecipeList;