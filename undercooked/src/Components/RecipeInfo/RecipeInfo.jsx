import "./RecipeInfo.css";

const RecipeInfo = ({ recipe, onChoose }) => {
  return (
    <div
      id={recipe.id}
      className="recipe-item"
      onClick={() => onChoose(recipe.id)}
    >
      <label className="recipe-list-title">{recipe.name}</label>
      <div>{recipe.description}</div>
    </div>
  );
};

export default RecipeInfo;
