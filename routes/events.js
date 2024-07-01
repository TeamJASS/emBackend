import { Router } from "express";
import { getEvent, getEvents, patchEvent, postEvent } from "../controllers/events";

const eventRouter= Router();

eventRouter.get('/event',getEvents);

eventRouter.post('/event',postEvent);

eventRouter.patch('/event/:id',patchEvent)

eventRouter.get('/article/:id',getEvent);



