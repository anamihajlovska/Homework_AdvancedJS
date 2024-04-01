import { Router } from "express";
import { recipeController} from "../controller/recipe.controller.js";

const recipeRouter = Router();
const RecipeController = new recipeController();

recipeRouter.post("/recipes", async (req, res) => {
    await RecipeController.addRecipe(req, res);
});

recipeRouter.get("/recipes", async (req, res) => {
    await RecipeController.getRecipes(req, res);
});

recipeRouter.get("/recipes/:id", async (req, res) => {
    await RecipeController.getRecipeById(req, res);
});

recipeRouter.delete("/recipes/:id", async (req, res) => {
    await RecipeController.deleteRecipeById(req, res);
});

recipeRouter.put("/recipes/:id", async(req, res) => {
    await RecipeController.editRecipeById(req, res);
})

export default recipeRouter;