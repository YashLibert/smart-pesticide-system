import mongoose, { Schema } from "mongoose"

const sprayEventSchema = new Schema(
    {
        farmer: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        crop: {
            type: Schema.Types.ObjectId,
            ref: "plant",
            required: true,
        },
        pesticideType: {
            type: String,
            required: true
        },
        amountUsed: {
            type: Number,
            required: true
        },
        location: {
            type: String
        },
        infectionLevel: {
            type: Number,
            required: true,
        },
        blockHash: {
            type: String
        },
    },
    { timestamps: true }
)

export const SprayEvent = mongoose.modelNames("SprayEvent", sprayEventSchema)