import mongoose from "mongoose";

const { Schema, model } = mongoose;

const contactSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const Contact = model("contact", contactSchema);

export default Contact;
