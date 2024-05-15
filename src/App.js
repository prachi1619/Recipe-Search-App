// App.js
import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import recipes from './recipes.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (ingredients) => {
    setSearchTerm(ingredients);
    const filtered = recipes.filter((recipe) => {
      const recipeIngredients = recipe.ingredients.map((ingredient) =>
        ingredient.toLowerCase()
      );
      const searchIngredients = ingredients.toLowerCase().split(', ');
      const result = searchIngredients.every((searchIngredient) =>
        recipeIngredients.some((recipeIngredient) =>
          recipeIngredient.includes(searchIngredient)
        )
      );
      return result;
    });
    setFilteredRecipes(filtered);
  };

  return (
    <Container maxWidth="lg">
      <Box mt={4} mb={6}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Recipe Search App
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" gutterBottom>
          Find delicious recipes by entering ingredients
        </Typography>
        <SearchForm onSearch={handleSearch} />
      </Box>
      <RecipeList recipes={filteredRecipes} searchTerm={searchTerm} />
    </Container>
  );
}

export default App;