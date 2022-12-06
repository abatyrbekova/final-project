import mongoose from "mongoose";
import {roomSchema} from "./room.js";

const { Schema, model } = mongoose;
const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  priceRange: {
    type: String,
    required: true,
  },
  rating: {
    stars: { type: Number, min: 1, max: 5, default: 1 },
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  rooms: [roomSchema],
  url: { type: String },
});

const Hotel = model("hotel", hotelSchema);

export default Hotel;
