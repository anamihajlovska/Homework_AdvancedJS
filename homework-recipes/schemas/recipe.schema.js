import mongoose from "mongoose";

const {Schema} = mongoose;

const recipeSchema = new Schema({
    recipeName: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    cookingDuration: {
        type: String,
    },

    ingredients: [
        {
          type: String,
        },
      ],

    servings: {
        type: Number,
    },

    difficulty: {
        type: String,
    },

    cuisine: {
        type: String,
    }


})

export const recipeMongoModel = mongoose.model("Recipe", recipeSchema, "recipes");