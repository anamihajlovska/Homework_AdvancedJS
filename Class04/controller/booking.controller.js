import { bookingMongoModel } from "../schemas/booking.schema.js";
import { AccommodationModel } from "../model/accommodation.model.js";

const accommodationModel = new AccommodationModel()
export class BookingController {
    async bookAccommodation(req, res){
        const {accommodationId} = req.body;
        try {
            const accommodation = await accommodationModel.bookAccommodation(accommodationId);
            const booking = new bookingMongoModel({accommodation: accommodation._id});
            await booking.save();
            res.status(201).send({message: "Booking success", booking})
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    }

    async getBookings(req, res) {
        const bookings = await bookingMongoModel.find().populate("accommodation");
        res.send(bookings);

    }

    


}