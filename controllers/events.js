
export const getEvents = async (req, res,next) => {
    try {
        const allEvents = await eventModel.find();
        res.json(allEvents);
    } catch(error) {
        next(error);
    }
};


export const postEvent = async (req, res,next) => {
    try {
        const newEvent = await eventModel.create(req.body)
        res.json(newEvent);
    } catch (error) {
        next(error);
    }
};


export const getEvent =  (req, res,next) => {
    try {
        res.json(req.params);
    } catch (error) {
        next(error);
    }
};

export const deleteEvent = async (req, res,next) => {
    try {
        const deleteEvent = await articleModel.findByIdAndDelete(req.params.id)
        res.json(deleteEvent);
    } catch (error) {
        next(error);
    }
};


export const patchEvent = async (req, res,next) => {
    try {
        // const subject = req.body.articleSubject
        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json(updatedEvent)

    } catch (error) {
        next(error);
    }
};

