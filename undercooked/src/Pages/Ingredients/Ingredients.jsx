import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import './Ingredients.css'

export default function Ingredients() {

  const [ingredients, setIngredient] = useState(null);

  useEffect(() => {
    async function fetchData(url, setData) {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      console.log(result);
    }
    fetchData('/api/ingredients', setIngredient)

  }, [])


  return (ingredients ?
    <div className="container">
      <div className="ingredients">
        {ingredients.map((ingredient => {
          return <li key={ingredient.id}>
            {ingredient.name}
          </li>
        }))}
        <Outlet />
      </div>
    </div> :
    <div> <Outlet />
    </div>
  )
}