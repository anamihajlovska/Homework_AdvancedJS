import { accommodationMongoModel } from "../schemas/accommodation.schema.js";

export class AccommodationModel {
    async createAccommodation(data){
        try {
            const accommodation = new accommodationMongoModel(data);
            const savedAccommodation = await accommodation.save();
            return savedAccommodation;
        } catch (error) {
            throw new Error;
        }
    }

    async getAccommodations(){
        try {
            const accommodations = await accommodationMongoModel.find();
            return accommodations;
        } catch (error) {
            throw new Error;
        }
    }

    async getAccommodationById(accommodationId){
        try {
            const accommodation = await accommodationMongoModel.findById(accommodationId);
            return accommodation;
        } catch (error) {
            throw new Error;        }
    }

    async deleteAccommodationById(accommodationId){
        try {
            const accommodationToDelete = await accommodationMongoModel.findByIdAndDelete(accommodationId);
            return accommodationToDelete;
        } catch (error) {
            throw new Error;
        }
    }

    async editAccommodationById(accommodationId, updatedAccommodation){
        try {
            const accommodationToEdit = await accommodationMongoModel.findByIdAndUpdate(accommodationId, updatedAccommodation);
            return accommodationToEdit;
        } catch (error) {
            throw new Error;
        }
    }

    async bookAccommodation(accommodationId){
        try {
            const accommodation = await accommodationMongoModel.findById(accommodationId);
            if(!accommodation){
                throw new Error ("Accommodation not found");
            }

            if(!accommodation.isAvailable){
                throw new Error("Accommodation not available")
            }
            accommodation.isAvailable = false;
            await accommodation.save();
            return accommodation;
        } catch (error) {
            throw new Error;
        }
    }

    


}