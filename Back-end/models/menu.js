import mongoose from "mongoose";

const { Schema, model } = mongoose;

const menuSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    mealsOptions: { type: String, 
        name: {
        type: String,
        required: true},
        time: { type: String, required: true },
        price: { type: Number, required: true },
    }, 
    images: { type: [String], required: true },
}, {collection: "menu"});

const Menu = model ("menu", menuSchema);

export default Menu;
