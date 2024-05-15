// SearchForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchForm({ onSearch }) {
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredients);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center">
        <TextField
          label="Enter ingredients separated by commas"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ ml: 2 }}
        >
          Search
        </Button>
      </Box>
    </form>
  );
}

export default SearchForm;