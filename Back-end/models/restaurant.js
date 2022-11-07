import mongoose from "mongoose";

const { Schema, model } = mongoose;

const restaurantSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [String], required: true },
    rating: { type: Number, min: 1, max: 5, default: 1 },
    isAvailable: {type:Boolean},
    menu: [menuSchema],
});

const Restaurant = model("restaurant", restaurantSchema);


export default Restaurant;