import express from 'express';
import Room from '../models/room.js';

const router = express.Router();

//GET all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


//GET rooms by name
router.get('/name/:name', async (req, res) => {
    try {
        const room = await Room.findOne({ name: req.params.name });
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// POST create a new room
// router.post('/create', async(req, res) => {
//     try {
//         const newRoom = await Hotel.create(req.body);
//         return res.status(201).json(newRoom);
//     } catch (error) {
//         return res.status(500).json({error: error.message});
//     }
// });

export default router;