import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


export default function Layout () {

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


  return ( ingredients ?
  <div className="Layout">
    {ingredients.map((ingredient => {
      return <li key={ingredient.id}>
        {ingredient.name}
      </li>
    }))}
  <Outlet />
</div> :
 <div> <Outlet /></div>
  )
}

