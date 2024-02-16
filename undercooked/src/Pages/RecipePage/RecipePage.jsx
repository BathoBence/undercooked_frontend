import { useEffect, useState } from "react";
import Recipe from "../../Components/Recipe/Recipe";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";

import "./RecipePage.css";

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let lock = false;

    // iif
    (async function() {
      const url = `/api/recipes/${id}`;
      const response = await fetch(url);
      const result = await response.json();
      if (!lock) {
        setRecipe(result);
      }
    })();

    return () => {
      lock = true;
    };
  }, [id]);

  return recipe ? (
    <div>
      <Recipe recipe={recipe} />
    </div>
  ) : (
    <Loading />
  );
};

export default RecipePage;
