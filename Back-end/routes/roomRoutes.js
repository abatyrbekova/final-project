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


//GET
//http://localhost:3000/api/hotels/rooms/search?bedSize=MEDIUM&sleeps=1
router.get('/rooms/search',async(req, res) => {
    console.log("query items", req.query)
    //req.query is used for query parameters 
                                    //conditions 
    const rooms = await Room.find({'rooms.bedSize':req.query.bedSize, 'rooms.sleeps':req.query.sleeps}).select('rooms.$') //select the rooms you found

    return res.status(200).json(rooms);
})

//GET: show the room by ID 
//http://localhost:3000/api/hotels/rooms/byid/63341a256c073fe2d6b41b8d (! example id)
router.get('/rooms/byid/:id', async(req, res) => {
    //find the room with that id inside the array.
    //select specific items within the document
    const room = await Room.find({'rooms._id':req.params.id}).select('rooms.$') //positional operator $, show only the room it found in the condition.

    if(!room){
        //we couldn't find a room with that id 
        return res.status(404).json({Message:'Room not found'});
//GET
    }
    //we found it! yay! let's return it.
    return res.status(200).json(room);
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