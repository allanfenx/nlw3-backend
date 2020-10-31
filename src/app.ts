import express from "express";
import cors from "cors";
import path from "path";

import "./database/connection";

import OrphanageRoutes from "./routes/OrphanageRoutes";


const app = express();
const Port = 8080;

app.use(cors());
app.use(express.json());

app.use("/", OrphanageRoutes);
app.use('/uploads', express.static(path.join(__dirname, "..", "uploads")))

app.listen(Port, () => {
    console.log("Aplication running!");
})