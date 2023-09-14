import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: Buffer,
        contentType: String
    }
});

const Image = mongoose.model("Image", imageSchema);

export default Image;