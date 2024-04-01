import { Router } from "express";
import { AccommodationController } from "../controller/accommodation.controller.js";

const AccommodationsRouter = Router();
const accommodationController = new AccommodationController();


// YOUR ROUTES GOES HERE

AccommodationsRouter.post("/accommodations", async(req, res) => {
    await accommodationController.addAccommodation(req, res);
})

AccommodationsRouter.get("/accommodations", async(req, res) => {
    await accommodationController.getAllAccommodations(req, res)
})

AccommodationsRouter.get("/accommodations/:id", async(req, res) => {
    await accommodationController.getAccommodationById(req, res);
} )

AccommodationsRouter.delete("/accommodations/:id", async(req, res) =>{
    await accommodationController.deleteAccommodationById(req,res);
})

AccommodationsRouter.put("/accommodations/:id", async(req, res)=> {
    await accommodationController.editAccommodationById(req, res);
})

export default AccommodationsRouter;
