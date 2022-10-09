import dotenv from "dotenv";
import express from "express";
import qnaRouter from "./src/router/questionAnswering";

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env["SERVER_PORT"];

app.use("/api/questionAndAnswer", qnaRouter);

app.listen(port, () => {
  console.log(`Hello, this is port ${port}`);
});
