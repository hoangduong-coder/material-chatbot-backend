import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import materialRouter from "./src/router/material";
import qnaRouter from "./src/router/questionAnswering";

const app = express();

app.use(express.json());
app.use(express.static("build"));
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
dotenv.config();

const port = process.env["LOCAL_SERVER_PORT"];

app.use("/api/qna", qnaRouter);

app.use("/api/material", materialRouter);

app.listen(port, () => {
  console.log(`Hello, this is port ${port}`);
});
