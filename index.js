import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/config.js';
import recipeRouter from './Routers/recipe.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use('/api/recipes', recipeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port`);
});