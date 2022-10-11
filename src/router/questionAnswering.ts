/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express from "express";
import questionService from "../service/questionHandler";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("Run GET successfully!");
  res.send("Start chatting with me!");
});

router.post("/", (req, res) => {
  try {
    const { question } = req.body;
    const newQuestion = questionService.postQuestion(question);
    console.log("Run POST successfully!");
    res.json(newQuestion);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
