import express from "express";
import {
  getAllUsers,
  login,
  registerUser,
  createUser,
} from "../controllers/userController.js";
// because of the controllers now we don't need: import User from '../models/user.js';

const router = express.Router();

//GET::
//http://localhost:3000/api/users/
router.get("/", getAllUsers);

//Post Login
router.post("/login", login);

router.post("/register", registerUser);

router.post("/create", createUser);

export default router;
