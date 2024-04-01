import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const mongo_connection = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "recipe-db",
        })
        console.log("Connection with mongo success");
    } catch (error) {
        throw new Error("Connection to mongo database failed!");
    }
}