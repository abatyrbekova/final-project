import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import passport from "passport";

import roomRoutes from "./routes/roomRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import configureJwtStrategy from "./passport-config.js";
import hotelRoutes from "./routes/hotelRoutes.js";

// inside the backend u must create "images" folder and put inside it the all images, and then in the DB the url should be like this http://localhost:3001/img/flower.jpg
dotenv.config();

const app = express();

app.use(express.json());

//connect to the database
app.use(passport.initialize());
//configure passport to use the jwt strategy
configureJwtStrategy(passport);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

app.use("/api/orders", orderRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/users", userRoutes);
app.use("/api/hotel", hotelRoutes);
app.use("/api/messages", messageRoutes);

// pictures
app.use("/img", express.static("./images"));

app.listen(3001, (req, res) => {
  console.log("Server is running on port 3001");
});
