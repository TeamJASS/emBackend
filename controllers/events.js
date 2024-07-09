import { eventModel } from "../models/events.js";

import { json } from "express";
export const getEvents = async (req, res, next) => {
    try {
        const { skip=0, filter="{}", fields="{}", limit, ...rest } = req.query;

        let query;
        if(limit){
            query = eventModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        }else{
            query = eventModel
            .find(JSON.parse(filter))
            .select(JSON.parse(fields))
            .limit(limit)
            .skip(skip);
        }

        // Conditionally add limit to the query if it is defined
        // if (limit) {
        //     query = query.limit(parseInt(limit, 10)); // Ensure limit is an integer
        // }

        const allEvents = await query;

        res.status(200).json(allEvents);
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

