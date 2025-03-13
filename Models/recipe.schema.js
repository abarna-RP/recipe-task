import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [{ type: String }],
  instructions: { type: String },
  category: { type: String },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;