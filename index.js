import express from "express"
import eventRouter from "./routes/events.js";
import mongoose from "mongoose";
import 'dotenv/config'

await mongoose.connect(process.env.MONGO_URI)

const app = express();

app.use(express.json());

app.use(eventRouter);



app.listen(8080, (req, res) => {
    console.log('Listening on Port 8080');
});