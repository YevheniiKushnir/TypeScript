import "./config/dotenv.config.js";
import express from "express";
import tasksRouter from "./routes/tasks.js";
import globalError from "./middleware/globalError.js";
import notFound from "./middleware/notFound.js";
import logger from "./middleware/logger.js";
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(logger);
app.get("/", (req, res) => {
    res.send("Hello, TypeScrpt with Express!");
});
app.use("/api/tasks", tasksRouter);
app.use(notFound);
app.use(globalError);
async function startServer() {
    try {
        const server = app.listen(PORT, () => {
            console.log(`✅ Server running on http://localhost:${PORT}`);
        });
        server.on("error", (err) => {
            console.error("Server failed to start:", err);
            process.exit(1);
        });
    }
    catch (error) {
        console.error("Unknow error: ", error);
        process.exit(1);
    }
}
startServer();
//# sourceMappingURL=index.js.map