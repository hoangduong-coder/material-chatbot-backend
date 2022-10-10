/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express from "express";
import questionService from "../service/questionHandler";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("Run GET successfully!");
  res.send("Start chatting with me!");
});

router.post("/qna", (req, res) => {
  console.log("Run POST successfully!");
  const { question } = req.body;
  const newQuestion = questionService.postQuestion(question);
  res.json(newQuestion);
});

export default router;
