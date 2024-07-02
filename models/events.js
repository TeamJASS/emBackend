import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json"

const eventSchema = new Schema(
    {
        name: { type: String, unique: true, required: true },
        price: { type: String, required: true },
        location: { type: String, required: true },
        flierURL: { type: String, required: true }
    }, {
    timestamps: true,
}
);

eventSchema.plugin(toJSON);

export const eventModel = model('Event', eventSchema);
