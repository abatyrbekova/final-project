import express from 'express';
import Message from '../models/message.js';

const router = express.Router();

//GET all contacts
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

//GET contact by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const message = await Message
            .findById(id);
        res.status(200).json(message);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


// POST create a new contact
router.post('/create', async(req, res) => {
    try {
        const newMessage = await Message.create(req.body);
        return res.status(201).json(newMessage);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default router;
