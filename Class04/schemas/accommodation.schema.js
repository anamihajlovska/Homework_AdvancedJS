import mongoose from "mongoose";

const {Schema} = mongoose;

const accommodationSchema = new Schema({
    name: {
        type: String
    },

    address: {
        type: String
    },

    bookingPricePerDay: {
        type: Number
    },

    type: {
        type: String
    },

    hasAc: {
        type: Boolean
    },

    hasPrivateParking: {
        type: Boolean
    },

    hasWifi: {
        type: Boolean
    },

    isAvailable: {
        type: Boolean
    }
})

export const accommodationMongoModel = mongoose.model("Accommodation", accommodationSchema, "accommodations");