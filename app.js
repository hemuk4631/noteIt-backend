import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notes from "./routes/notesRoutes.js";

dotenv.config({ path: "./config/config.env" });
const app = express();

//using middelwares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/api", notes);

export default app;

app.get("/", (req, res) => {
  res.send(
    `<h1>Site is working. Click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  );
});
