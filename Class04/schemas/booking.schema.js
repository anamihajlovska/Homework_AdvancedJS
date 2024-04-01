import mongoose from "mongoose";

const {Schema} = mongoose;

const bookingSchema = new Schema({
    accommodation: {
        type: Schema.Types.ObjectId,
        ref: 'Accommodation',
        required: true
    }
})

export const bookingMongoModel = mongoose.model("Booking", bookingSchema, "bookings");