import React from 'react';

function RecipeCard({ recipe}) {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>
      { (
        <div>
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h4>Instructions</h4>
          <p>{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;