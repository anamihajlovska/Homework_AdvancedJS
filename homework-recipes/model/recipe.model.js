import { recipeMongoModel } from "../schemas/recipe.schema.js";

export class RecipeModel {
    async createRecipe(recipeData){
        try {
            const recipe = new recipeMongoModel(recipeData);
            const recipeSaved = await recipe.save();
            return recipeSaved;
            
        } catch (error) {
            throw new Error;
        }
    }

    async getAllRecipes(){
        try {
            const recipes = await recipeMongoModel.find();
            return recipes;
        } catch (error) {
            throw new Error;
        }
       
    }

    async getRecipeById(recipeId) {
        try {
            const recipe = await recipeMongoModel.findById(recipeId);
            return recipe;
        } catch (error) {
            throw new Error;
        }
    }

    async deleteRecipeById(recipeId){
        try {
            const recipeToDelete = await recipeMongoModel.findByIdAndDelete(recipeId);
            return recipeToDelete;
        } catch (error) {
            throw new Error;
        }
    }

    async editRecipeById(recipeId, updatedRecipe){
        try {
            const recipeToEdit = await recipeMongoModel.findByIdAndUpdate(recipeId, updatedRecipe);
            return recipeToEdit;
        } catch (error) {
            throw new Error;
        }
    }
    
}