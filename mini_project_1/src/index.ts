import "./config/dotenv.config.js";
import express, { Application, Request, Response } from "express";
import tasksRouter from "./routes/tasks.js";
import globalError from "./middleware/globalError.js";
import notFound from "./middleware/notFound.js";
import logger from "./middleware/logger.js";
const app: Application = express();
const PORT: string | number = process.env.PORT || 3001;

app.use(express.json());
app.use(logger);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScrpt with Express!");
});

app.use("/api/tasks", tasksRouter);

app.use(notFound);
app.use(globalError);

async function startServer(): Promise<void> {
  try {
    const server = app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
    });

    server.on("error", (err) => {
      console.error("Server failed to start:", err);
      process.exit(1);
    });
  } catch (error) {
    console.error("Unknow error: ", error);
    process.exit(1);
  }
}

startServer();
