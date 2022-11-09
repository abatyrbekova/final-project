import express from 'express';
import User from '../models/user.js';

const router = express.Router();

//GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


//POST create a new user
router.post('/create', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default router;

