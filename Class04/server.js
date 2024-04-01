import express from "express";
import { mongo_connection } from "./mongo-connection.js";
import AccommodationsRouter from "./routes/accommodations.routes.js";
import BookingRouter from "./routes/booking.routes.js";

const server = express();

server.use(express.json());
server.use(AccommodationsRouter);
server.use(BookingRouter);

server.listen(3000, "localhost", async () => {
  console.log("Server is up and running");
  await mongo_connection();
});
