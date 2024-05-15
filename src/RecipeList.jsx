// RecipeList.js
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, searchTerm }) {
  return (
    <Box mt={4}>
      <Grid container spacing={3} justifyContent="center">
        {searchTerm && recipes.length === 0 && (
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary" align="center">
              No recipes found for the given ingredients.
            </Typography>
          </Grid>
        )}
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RecipeList;