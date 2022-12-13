import mongoose from "mongoose";

const { Schema, model } = mongoose;

const orderSchema = new Schema({
  dateCreated: { type: Date, default: Date.now },
  bookedRoomId: { type: Schema.Types.ObjectId, ref: "room" },
  startDate: { type: Date },
  endDate: { type: Date },
});

const Order = model("order", orderSchema);

export default Order;
