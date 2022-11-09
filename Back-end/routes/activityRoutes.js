import express from 'express';
import Activity from '../models/activity.js';

const router = express.Router();

//GET all activities
router.get('/', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

//GET activities ba name
router.get('/name/:name', async (req, res) => {
    try {
        const activity = await Activity.findOne({ name: req.params.name });
        res.status(200).json(activity);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;