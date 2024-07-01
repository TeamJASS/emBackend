import { model, Schema } from "mogoose";
// import { toJSON } from "@reis/mongoose-to-json"

const eventSchema = new Schema(
  {
    name: { type: String, unique: true, required: true },
    price: { type: String, required: true },
    location: { type: String, enum: ['Point'], required: true },
      coordinates: {type: [Number], required: true },
      flierURL: { type: String, required: true }
    },{
    timestamps: true,
  }
);

//comment
// eventSchema.plugin(to JSON);

export const eventModel  = model('Event',eventSchema);
