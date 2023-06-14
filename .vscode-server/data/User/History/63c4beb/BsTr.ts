import mongoose from "mongoose";
console.log(process.env.MONGODB_USER_KEY);

mongoose
    .connect(`mongodb+srv://admin:${process.env.MONGODB_USER_KEY}@discord-backend.9fh0jvd.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));