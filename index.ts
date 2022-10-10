// import cors from "cors";

import dotenv from "dotenv";
import express from "express";
import qnaRouter from "./src/router/questionAnswering";

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env["LOCAL_SERVER_PORT"];
// const endpoint = process.env["LANGUAGE_STUDIO_ENDPOINT"];

// const corsOptions = {
//   origin: [
//     "http://localhost:3000",
//     `http://${endpoint}.api.cognitive.microsoft.com//language/:query-knowledgebases?projectName=material-chatbot&api-version=2021-10-01&deploymentName=test`,
//   ],
//   allowedHeaders: ["Ocp-Apim-Subscription-Key", "Content-Type"],
// };

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
// app.use(cors(corsOptions));

app.use("/", qnaRouter);

app.listen(port, () => {
  console.log(`Hello, this is port ${port}`);
});
