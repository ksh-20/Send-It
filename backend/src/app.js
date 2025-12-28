import express from "express";
import cors from "cors";
import pinRoutes from "./routes/pinRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pin", pinRoutes);
app.use("/api/file", fileRoutes);

app.use(errorHandler);

export default app;