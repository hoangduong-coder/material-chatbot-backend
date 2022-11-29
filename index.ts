import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import materialRouter from "./src/router/material";
import qnaRouter from "./src/router/questionAnswering";

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env["LOCAL_SERVER_PORT"];

const corsOptions = {
  origin: ["http://localhost:3000"],
  allowedHeaders: ["Ocp-Apim-Subscription-Key", "Content-Type"],
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors(corsOptions));

app.use("/qna", qnaRouter);

app.use("/material", materialRouter);

app.listen(port, () => {
  console.log(`Hello, this is port ${port}`);
});
