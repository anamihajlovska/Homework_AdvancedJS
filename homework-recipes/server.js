import express from "express";
import { mongo_connection } from "./mongo-connection.js";
import recipeRouter from "./routes/recipe.routes.js";


const server = express();

server.use(express.json());

server.use(recipeRouter);


server.listen(3000, "localhost", async () => {
    console.log("Server is up and running");
    await mongo_connection();
  });