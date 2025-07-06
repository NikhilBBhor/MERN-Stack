import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from 'cors'
import path from "path"

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve()

if (process.env.NODE_ENV !== "production") {
    // middleware
    app.use(
        cors({
            origin: 'http://localhost:5173'
        })
    );
}

app.use(express.json());
app.use(rateLimiter);

// custom simple middleware
app.use((req, res, next) => {
    console.log(`Req method is ${req.method} and req URL is ${req.url}`);
    next();
});

app.use("/api/notes", notesRoutes);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join("../frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT)
});