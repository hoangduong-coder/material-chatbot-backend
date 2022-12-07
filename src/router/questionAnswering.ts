/* eslint-disable @typescript-eslint/no-unsafe-argument */

import express from "express";
import questionService from "../service/question-and-answer";

const router = express.Router();

router.get("/", (_req, res) => {
  res.status(200).send("Material chatbot server");
});

router.post("/", (req, res) => {
  try {
    const answer = questionService.postQuestion(req.body);
    res.status(201).send(answer);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
