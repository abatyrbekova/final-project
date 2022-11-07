import mongoose from "mongoose";
import roomSchema from "./room.js";

const { Schema, model } = mongoose;
const hotelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        address: String,
        number: String,
        email: String,
        postalCode: String,
        city: String,
        country: String,
    },
    priceRange: {
        type: Number,
        required: true,
    },
    rating: {
        stars: {type:Number, min: 1, max: 5, default: 1},
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    amenities: {
        type: [String],
        required: true,
    },
    rooms: [roomSchema],
});

const Hotel = model("hotel", hotelSchema);

export default Hotel;