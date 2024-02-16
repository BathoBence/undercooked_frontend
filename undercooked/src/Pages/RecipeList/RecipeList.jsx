import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import RecipeInfo from "./../../Components/RecipeInfo/RecipeInfo";

import "./RecipeList.css";
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
    let lock = false;

    fetchRecipes().then((recipes) => {
      if (!lock) {
        setAllRecipes(recipes);
      }
    });

    return () => {
      lock = true;
    }
  }, []);

  const handleChoose = (recipeId) => {
    navigate(`/recipes/${recipeId}`);
  };

  return allRecipes ? (
    <div className="center_list">
      {allRecipes.map((recipe) => {
        return (
          <RecipeInfo key={recipe.id} recipe={recipe} onChoose={handleChoose} />
        );
      })}
    </div>
  ) : (
    <Loading />
  );
};

export default RecipeList;
