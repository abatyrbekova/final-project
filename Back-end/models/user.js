import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  dateCreated: { type: Date, default: Date.now },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  // userName: { type: String, required: true },
  //password: { type: String, required: true },

  email: { type: String, required: true },
  address: { type: String, required: true },
});

const User = model("user", userSchema);

export default User;
