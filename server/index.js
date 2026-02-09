import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import route from './routes/userRoute.js';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000; // Fallback to 3000
const URL = process.env.MONGO_URL;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' })); // For production, restrict this to your frontend URL

// Routes
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use('/api', route);

// MongoDB Connection
mongoose.connect(URL)
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT,() => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Connection Failed:", err));
