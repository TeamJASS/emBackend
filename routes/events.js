import { Router } from "express";
import { getEvent, getEvents, patchEvent, postEvent } from "../controllers/events.js";
import { remoteUpload } from "../middlewares/upload.js";

const eventRouter= Router();

eventRouter.get('/events',getEvents);

eventRouter.post('/events',remoteUpload.single('image'),postEvent);

eventRouter.patch('/events/:id',patchEvent)

eventRouter.get('/events/:id',getEvent);


export default eventRouter;
