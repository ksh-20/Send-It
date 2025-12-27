import express from "express";
import cors from "cors";
import pinRoutes from "./routes/pinRoutes";
import fileRoutes from "./routes/fileRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pin", pinRoutes);
app.use("/api/file", fileRoutes);

app.use(errorHandler);

export default app;