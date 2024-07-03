import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json"

const eventSchema = new Schema(
    {
        name: { type: String, unique: true },
        price: { type: String },
        location: { type: String },
        flierURL: { type: String },
        date:{type :Date}
    }, {
    timestamps: true,
}
);

eventSchema.plugin(toJSON);

export const eventModel = model('Event', eventSchema);
