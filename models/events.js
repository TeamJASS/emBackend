import { model, Schema,Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json"

const eventSchema = new Schema(
    {
        name: { type: String, unique: true },
        description:{type:String},
        date:{type :Date},
        time:{type:String},
        category:{type:String,enum:["Amapiano","Gospel","Reggae","Dancehall","Pop","R&B"]},
        genre:{type:String,enum:["Clubbing","Comedy","Culture","Festivals","Live Music","Meet Ups"
       ]},
        price: { type: String },
        location: { type: String },
        image: { type: String ,required:true}  
    }, {
    timestamps: true,
}
);

eventSchema.plugin(toJSON);

export const eventModel = model('Event', eventSchema);
