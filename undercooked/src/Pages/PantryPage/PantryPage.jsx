import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Pantry from "../../Components/Pantry/Pantry"
import AddIngredientForm from "../../Components/Forms/AddNewIngredient/AddIngredientForm";
import './PantryPage.css';


const fetchPantry = async () => {
  const response = await fetch("/api/user/pantry");
  return await response.json();
}

const fetchIngredients = async () => {
  const response = await fetch("/api/ingredients");
  return await response.json();
}

const postItem = async (newItem) => {
  const response = await fetch("/api/user/pantry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  });
  return response;
}

const PantryPage = () => {

  const [pantry, setPantry] = useState(null);
  const [ingredients, setIngredients] = useState(null);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    fetchPantry().then(pantry => {
      setPantry(pantry);
    });
    fetchIngredients().then(ingredients => {
      setIngredients(ingredients);
    })
  }, [])

  const handleSave = async (newItem) => {
    const response = await postItem(newItem);
    if (response.ok) {
      setIngredients([...ingredients, response])
      const pantry = await fetchPantry()
      setPantry(pantry);
    }
    setIsAdd(false);
  }

  return <div className="pantry">
    <div className="pantry_title">My Pantry</div>

    <div className="pantry_nav">
      {isAdd ?
        ingredients ?
          <AddIngredientForm
            ingredients={ingredients}
            onSave={handleSave} /> :
          <Loading /> :
          <button className="add_new_button" onClick={() => setIsAdd(true)}>Add new item</button>
      }

    </div>

    <div className="pantry_items">
      {pantry ?
        <Pantry
          pantryItems={pantry} /> :
        <Loading />
      }
    </div>
  </div>;
}

export default PantryPage;