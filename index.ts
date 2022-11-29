import dotenv from "dotenv";
import express from "express";
import materialRouter from "./src/router/material";
import qnaRouter from "./src/router/questionAnswering";

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env["LOCAL_SERVER_PORT"];

app.use("/qna", qnaRouter);

app.use("/material", materialRouter);

app.listen(port, () => {
  console.log(`Hello, this is port ${port}`);
});
