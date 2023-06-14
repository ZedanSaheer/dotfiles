import mongoose,{Schema} from "mongoose";

const UserInterface = new Schema({
    discordId:{
        type:mongoose.SchemaTypes.String
    }
})