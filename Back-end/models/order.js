import mongoose from "mongoose";

const { Schema, model } = mongoose;

const orderSchema = new Schema({
  dateCreated: { type: Date, default: Date.now },
  //user: { type: Schema.Types.ObjectId, ref: "user" },
  bookedRoomId: { type: Schema.Types.ObjectId, ref: "room" },
  startDate: { type: Date },
  endDate: { type: Date },
  // unavailableNumbers:{ type:number, booktime:[Date]}
});

const Order = model("order", orderSchema);

export default Order;

// we need more fields
// the ref id of the room that has been booked
// the dates it has been booked for
// start date and end date
// optional, booking notes

// mongodb operators
//
