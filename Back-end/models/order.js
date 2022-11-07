import mongoose from "mongoose";

const { Schema, model } = mongoose;

const orderSchema = new Schema({
    dateCreated: { type: Date, default: Date.now },
    user:{ type: Schema.Types.ObjectId, ref: "user" }

});

const Order = model("order", orderSchema);

export default Order;