import mongoose, { Schema } from "mongoose";

const UserInterface = new Schema({
    discordId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    accessToken: { type: mongoose.SchemaTypes.String, required: true },
    refreshToken: { type: mongoose.SchemaTypes.String, required: true },
})

export default mongoose.model('users', UserInterface)