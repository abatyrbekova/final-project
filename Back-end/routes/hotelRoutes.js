import express from "express";
import Hotel from "../models/hotel.js";

const router = express.Router();

//GET all hotel infos
router.get("/", async (req, res) => {
  try {
    const hotel = await Hotel.find();
    console.log(hotel);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
