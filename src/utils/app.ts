import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import materialRouter from "../router/material";
import qnaRouter from "../router/questionAnswering";

const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(express.static("build"));
app.use(cors());
dotenv.config();

app.use("/api/qna", qnaRouter);

app.use("/api/material", materialRouter);

export default app;