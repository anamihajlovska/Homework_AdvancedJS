import { RecipeModel } from "../model/recipe.model.js";

export class recipeController {
    constructor(){
        this.recipeModel = new RecipeModel ();
    }

    async addRecipe(req, res){
        const { recipeName, description, cookingDuration, ingredients, servings, difficulty, cuisine } = req.body;

        const recipeData = {
            recipeName,
            description,
            cookingDuration,
            ingredients,
            servings,
            difficulty,
            cuisine
          };

        try {
            const recipe = await this.recipeModel.createRecipe(recipeData);
            res.status(201).send({ message: "Recipe is created", recipe });
        } catch (error) {
            res.status(400).send({message: error});
            console.log(error);
        }
    }

    async getRecipes(req, res){
        try {
            const recipes = await this.recipeModel.getAllRecipes();
            res.status(201).send({message: "Recipes:", recipes})
        } catch (error) {
            res.status(400).send({message: error});
        }
    
    }

    async getRecipeById(req, res){
        const productId = req.params.id;

        try {
            const recipe = await this.recipeModel.getRecipeById(productId);
            if (!recipe) {
                return res.status(404).send({ message: `Recipe with id: ${productId} not found.` });
              }
            res.status(201).send({message: "Recipe found!", recipe});
        } catch (error) {
            res.status(400).send({message: error});
        }
    }

    async deleteRecipeById(req, res){
        const productId = req.params.id;

        try {
            const recipe = await this.recipeModel.deleteRecipeById(productId);
            if (!recipe) {
                return res.status(404).send({ message: `Recipe with id: ${productId} not found.` });
              }
            res.status(201).send({message: "Recipe DELETED!", recipe});

        } catch (error) {
            res.status(400).send({message: error});
        }
    }

    async editRecipeById(req, res){
        const recipeId = req.params.id;
        const { recipeName, description, cookingDuration, ingredients, servings, difficulty, cuisine } = req.body;

        const updatedRecipe = {
            recipeName,
            description,
            cookingDuration,
            ingredients,
            servings,
            difficulty,
            cuisine
          };

          try {
            const recipe = await this.recipeModel.editRecipeById(recipeId, updatedRecipe);
            if (!recipe) {
                return res.status(404).send({ message: `Recipe with id: ${recipeId} not found.` });}
                res.status(201).send({message: "Success update!"})
            
        } catch (error) {
            res.status(400).send({message: error});
        }
        
          
        
    }
    }

