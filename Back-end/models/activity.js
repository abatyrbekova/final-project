import mongoose from "mongoose";

const { Schema, model } = mongoose;

const activitySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    images: { type: [String], required: true },
    rating: { type: Number, min: 1, max: 5, default: 1 },
    isAvailable: {type:Boolean},
});