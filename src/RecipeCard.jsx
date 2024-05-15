// RecipeCard.js
import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  List,
  ListItem,
} from '@mui/material';

function RecipeCard({ recipe }) {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={recipe.image}
          alt={recipe.title}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {recipe.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {recipe.description.slice(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOpenDialog}>
            Read More
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{recipe.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{recipe.description}</DialogContentText>
          <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%' }} />
          <Typography variant="subtitle1" gutterBottom>
            Ingredients
          </Typography>
          <List>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>{ingredient}</ListItem>
            ))}
          </List>
          <Typography variant="subtitle1" gutterBottom>
            Instructions
          </Typography>
          <Typography variant="body2">{recipe.instructions}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default RecipeCard;