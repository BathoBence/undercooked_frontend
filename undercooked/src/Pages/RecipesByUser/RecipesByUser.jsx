import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./RecipesByUser.css";
import RecipeInfo from "../../Components/RecipeInfo/RecipeInfo";

const fetchRecipesByUser = async () => {
  const response = await fetch("/api/user/recipes");
  return await response.json();
}

const RecipesByUser = () => {

  const [recipes, setRecipes] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipesByUser()
      .then((recipes) => { setRecipes(recipes) });
  }, [])

  const handleChoose = (recipeId) => {
    navigate(`/recipes/${recipeId}`)
  }

  return <>
    <div>
      <h2>You can cook these right away:</h2>
    </div>
    {
      recipes ?
        <div className='center_list'>
          {recipes.map((recipe) => {
            return <RecipeInfo key={recipe.id} recipe={recipe} onChoose={handleChoose} />
          })}
        </div> :
        <div>Loading...</div>
    }
  </>
}

export default RecipesByUser;