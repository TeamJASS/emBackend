import { Router } from "express";
import { getEvent, getEvents, patchEvent, postEvent } from "../controllers/events.js";

const eventRouter= Router();

eventRouter.get('/events',getEvents);

eventRouter.post('/events',postEvent);

eventRouter.patch('/events/:id',patchEvent)

eventRouter.get('/events/:id',getEvent);


export default eventRouter;
