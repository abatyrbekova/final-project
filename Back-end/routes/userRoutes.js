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

//User login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    
    const validPassword = await user.validatePassword(password);
    if (!validPassword)
        return res.status(401).json({ token: null, message: "Invalid password" });
    
    const token = jwt.sign({ id: user._id }, config.SECRET, {
        expiresIn: 60 * 60 * 24,
    });
    
    res.json({ token });
});

//User profile
router.get("/profile", async (req, res) => {
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "No user found" });
    
    res.json(user);
});

//User Register
router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    
    const token = jwt.sign({ id: newUser._id }, config.SECRET, {
        expiresIn: 60 * 60 * 24,
    });
    
    res.status(201).json({ token });
});

export default router;

