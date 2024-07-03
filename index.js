import express from "express"
import eventRouter from "./routes/events.js";
import mongoose from "mongoose";
import 'dotenv/config'
import expressOASGenerator from "express-oas-generator"
import cors from "cors"

await mongoose.connect(process.env.MONGO_URI)

const app = express();

expressOASGenerator.handleResponses(app,{
    alwaysServeDocs:true,
    tags:['events'],
    mongooseModels:mongoose.modelNames(),
});

app.use(cors())
app.use(express.json());

// app.use(express.static('event-uploads'));


app.use(eventRouter);

expressOASGenerator.handleRequests();
app.use((req,res)=>res.redirect('/api-docs'));

app.listen(8080, (req, res) => {
    console.log('Listening on Port 8080');
});