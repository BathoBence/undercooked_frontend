import { useState } from "react";
import './AddIngredientForm.css';

const AddIngredientForm = ({ ingredients, onSave }) => {
  const [ingredientId, setIngredientId] = useState(ingredients[0].id);
  const [amount, setAmount] = useState(null);
  const [unit, setUnit] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    let newIngredient = {
      id: ingredientId,
      amount,
      unit
    }

    return onSave(newIngredient);
  }


  return (
    <form className="ingredient_form" onSubmit={(e) => onSubmit(e)}>
      <div className="control">
        <label htmlFor="ingredientType">Ingredient: </label>
        <select onChange={(e) => setIngredientId(e.target.value)}>
          {ingredients.map(ingredient => {
            return (
              <option key={ingredient.name + ingredient.id}
                value={ingredient.id}>
                {ingredient.name}
              </option>
            )
          })}
        </select>
      </div>

      <div className="control">
        <label htmlFor="amount">Amount: </label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          name="amount"
          type="number" />
      </div>

      <div className="control">
        <label htmlFor="unit">Unit: </label>
        <input
          onChange={(e) => setUnit(e.target.value)}
          name="unit" />
      </div>

      <div>
        <button className="add_pantry_button" type="submit">Save</button>
      </div>

    </form>
  )

}

export default AddIngredientForm;