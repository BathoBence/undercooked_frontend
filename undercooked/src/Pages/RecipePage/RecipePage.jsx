import { useEffect, useState } from "react";
import Recipe from "../../Components/Recipe/Recipe";
import Loading from "../Loading/Loading";
import './RecipePage.css'
import { useParams } from "react-router-dom";

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData(url, setData){
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }
    fetchData(`/api/recipes/${id}`, setRecipe)

  }, [id])

  return (recipe ? <div>
    <Recipe recipe={recipe} />
  </div>
  :
  <Loading />)

}

export default RecipePage;