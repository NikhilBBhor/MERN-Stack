import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.send("You have created 5 notes.")
})

router.post("/", (req, res) => {
    res.status(201).json({message:"You have created 10 notes."})
})

export default router