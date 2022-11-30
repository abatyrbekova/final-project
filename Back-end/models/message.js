import mongoose from "mongoose";

const { Schema, model } = mongoose;


const messageSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true, ref: "transporter" },
});

const Message = model("message", messageSchema);

export default Message;
