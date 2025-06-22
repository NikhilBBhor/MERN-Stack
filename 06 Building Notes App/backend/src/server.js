import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());
app.use(rateLimiter);

// custom simple middleware
app.use((req, res, next) => {
    console.log(`Req method is ${req.method} and req URL is ${req.url}`);
    next();
});

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT)
});