import { eventModel } from "../models/events.js";

export const getEvents = async (req, res, next) => {
    try {
     
        const { limit =10, skip=0, filter="{}", fields="{}" } = req.query;

        const allEvents = await eventModel
        .find(JSON.parse(filter))
        .select(JSON.parse(fields))
        .limit(limit)
        .skip(skip)
       
       res.status(200).json(allEvents);
       console.log(allEvents)
    } catch (error) {
        next(error);
    }
}

export const postEvent= async (req,res,next)=>{
   try {
     const newEvent =await eventModel.create({
         ...req.body,
         image:req.file.filename
     });
     res.status(201).json(newEvent)
   } catch (error) {
    next(error);
   }

}

export const getEvent =  async (req, res,next) => {
    try {
        const getEvent =await eventModel.findById(req.params.id);
        res.status(200).json(getEvent);
    } catch (error) {
        next(error);
    }
};

export const deleteEvent = async (req, res,next) => {
    try {
        const deleteEvent = await eventModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteEvent);
    } catch (error) {
        next(error);
    }
};


export const patchEvent = async (req, res,next) => {
    try {
        // const subject = req.body.articleSubject
        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(201).json(updatedEvent)

    } catch (error) {
        next(error);
    }
};

