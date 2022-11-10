import express from 'express';
import Menu from '../models/menu.js';

const router = express.Router();

//GET all menus
router.get('/', async (req, res) => {
    try {
        const menus = await Menu.find();
        res.status(200).json(menus);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

//GET menus by name
router.get('/name/:name', async (req, res) => {
    try {
        const menu = await Menu.findOne({ name: req.params.name });
        res.status(200).json(menu);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;