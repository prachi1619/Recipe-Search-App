import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, searchTerm }) {
  return (
    <div>
      {searchTerm && recipes.length === 0 && (
        <p>No recipes found for the given ingredients.</p>
      )}
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </div>
  );
}

export default RecipeList;