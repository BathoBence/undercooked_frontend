import './RecipeInfo.css'

import { Navigate } from 'react-router';

const RecipeInfo = ({recipe}) => {

  console.log(recipe)

  return (
  <div id={recipe.id} className="recipe-item">
    <label className='recipe-list-title'>{recipe.name}</label>
    <div>{recipe.description}</div>
  </div>
  )
}

export default RecipeInfo