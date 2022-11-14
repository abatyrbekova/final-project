import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import roomRoutes from './routes/roomRoutes.js';
import activityRoutes from './routes/activityRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
import userRoutes from './routes/userRoutes.js';


dotenv.config();

const app = express();

app.use(express.json());

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
    .then(() => {
        console.log("Database connected! 😃");
    })
    .catch((error) => {
        console.log(error.message);
        console.log("🤨");
    });

    app.use('/api/rooms', roomRoutes);
    app.use('/api/activities', activityRoutes);
    app.use('/api/menu', menuRoutes);
    app.use('/api/users', userRoutes);

    
    app.listen(3001, (req, res) => {
        console.log("Server is running on port 3001");
    });