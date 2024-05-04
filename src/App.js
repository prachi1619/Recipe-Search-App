import React, { useState } from 'react';
import SearchForm from './SearchForm';
import RecipeList from './RecipeList';
import recipes from './recipes.json';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const handleSearch = (ingredients) => {
    setSearchTerm(ingredients);
    const filtered = recipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) =>
        ingredients.toLowerCase().includes(ingredient.toLowerCase())
      )
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <RecipeList recipes={filteredRecipes} searchTerm={searchTerm} />
    </div>
  );
}

export default App;

//Explanation:
// In the App component, we have two pieces of state: searchTerm and filteredRecipes. searchTerm is used to store the search term entered by the user, and filteredRecipes is used to store the recipes that match the search term.

// The handleSearch function is called when the user submits the search form. It filters the recipes based on the search term and updates the filteredRecipes state with the filtered recipes.

// The App component renders the SearchForm and RecipeList components. The SearchForm component is used to allow the user to enter the search term, and the RecipeList component displays the list of recipes that match the search term.

// The RecipeList component receives the filteredRecipes and searchTerm as props and renders the RecipeCard component for each recipe in the filteredRecipes array.

// The RecipeCard component is responsible for rendering the details of a single recipe, including the title, image, description, ingredients, and instructions.

// Overall, the App component manages the search functionality and passes the filtered recipes to the RecipeList component for rendering. The RecipeList component then renders the RecipeCard component for each recipe in the filteredRecipes array.