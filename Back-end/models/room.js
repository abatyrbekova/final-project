import mongoose from "mongoose";

const { Schema, model } = mongoose;

const roomSchema = new Schema({

  name: { type: String, required: true },
  size: { type: String, required: true },
  description: { type: String, required: true },
  sleeps: { type: String, required: true, min: 1, max: 4 },
  bedSize: { type: String, enum: ["QUEEN", "KING", "SINGLE", "DOUBLE"] },
  view: { type: String, enum: ["MOUNTAIN", "FOREST"] },
  rating: { type: Number, min: 1, max: 5, default: 1 },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  isAvailable: { type: Boolean },
  adults: { type: Number },
  children: { type: Number },
  //bookeddates: [{ startDate, endDate }], 
});

const Room = model("room", roomSchema);

export default Room;
