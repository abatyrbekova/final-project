import mongoose from "mongoose";

const { Schema, model } = mongoose;

const roomSchema = new Schema({
    name: {type: String, required: true},
    size: {type: String, required: true},
    description: {type: String, required: true},
    adults: {type: Number, required: true},
    children: {type: Number, required: true},
    bedSize:{type:String},
    view: {type: String},
    price: {type: Number, required: true},
    images: {type: [String], required: true},
    isAvailable: {type: Boolean},
});

const Room = model("room", roomSchema);

export default Room;