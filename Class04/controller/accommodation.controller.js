import { AccommodationModel } from "../model/accommodation.model.js";

export class AccommodationController {
    constructor(){
        this.AccommodationModel = new AccommodationModel()
    }

    async addAccommodation(req, res){
        const {name, address, bookingPricePerDay, type, hasAc, hasPrivateParking, hasWifi, isAvailable} = req.body;

        const data = {
            name,
            address,
            bookingPricePerDay,
            type,
            hasAc,
            hasPrivateParking,
            hasWifi,
            isAvailable
        };

        try {
            const accommodation = await this.AccommodationModel.createAccommodation(data);
            res.status(201).send({message: "Accommodation created!", accommodation});
        } catch (error) {
            res.status(400).send({message: error});
        }
    }

    async getAllAccommodations(req, res){
        try {
            const accommodations = await this.AccommodationModel.getAccommodations();
            res.status(201).send({message: "Accommodations:", accommodations})
        } catch (error) {
            res.status(400).send({message: error});
        }
    }

    async getAccommodationById(req,res){
        const accommodationId = req.params.id;

        try {
            const accommodation = await this.AccommodationModel.getAccommodationById(accommodationId);
            if(!accommodation){
                return res.status(404).send({message: `Accommodation with id: ${accommodationId} not found!`});
            }
            res.status(201).send({message: "Accommodation found!", accommodation});
        } catch (error) {
            res.status(400).send({message: error});
        }

    }

    async deleteAccommodationById(req, res){
        const accommodationId = req.params.id;
        try {
            const accommodation = await this.AccommodationModel.deleteAccommodationById(accommodationId);
            if(!accommodation){
                return res.status(404).send({message: `Accommodation with id: ${accommodationId} not found!`});
            }

            res.status(201).send({message: "Accommodation deleted!", accommodation})
        } catch (error) {
            res.status(400).send({message: error});
        }
    }

    async editAccommodationById(req, res){
        const accommodationId = req.params.id;

        const {name, address, bookingPricePerDay, type, hasAc, hasPrivateParking, hasWifi, isAvailable} = req.body;

        const updatedAccommodation = {
            name,
            address,
            bookingPricePerDay,
            type,
            hasAc,
            hasPrivateParking,
            hasWifi,
            isAvailable
        };

        try {
            const accommodation = await this.AccommodationModel.editAccommodationById(accommodationId, updatedAccommodation);
            if(!accommodation){
                res.status(404).send({message: `Accommodation with id: ${id} not found!`})
            }
            res.status(201).send({message: "Success update!"})
        } catch (error) {
            res.status(400).send({message: error});
        }

    }
}