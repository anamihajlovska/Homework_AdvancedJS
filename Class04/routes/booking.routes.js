import {Router} from "express";

import { BookingController } from "../controller/booking.controller.js";

const BookingRouter = Router();
const bookingController = new BookingController();

BookingRouter.post("/booking", async(req, res)=>{
    await bookingController.bookAccommodation(req, res);
})

BookingRouter.get("/booking", async(req, res)=>{
    await bookingController.getBookings(req, res);
})



export default BookingRouter;