import './RecipeInfo.css'
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