import "./Recipe.css";

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-guide">
      {recipe.name}
      {recipe.ingredients.map((ingredient) => {
        return (
          <li key={ingredient.material.name + ingredient.unit}>
            {ingredient.amount} {ingredient.unit} {ingredient.material.name}
          </li>
        );
      })}
      <div>{recipe.guide}</div>
    </div>
  );
};

export default Recipe;
