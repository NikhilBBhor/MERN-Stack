import mongoose from "mongoose";

// 1 - create a schema
// 2 - create a model based off that schema 

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },   
}, 
{ timestamps: true }  // MongoDB creates createdAt and updatedAt fields by default
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
