import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
    res.send("You have created 5 notes.")
})

app.post("/api/notes", (req, res) => {
    res.status(201).json({message:"You have created 10 notes."})
})

app.listen(5001, () => {
    console.log("Server started on PORT:5001")
});