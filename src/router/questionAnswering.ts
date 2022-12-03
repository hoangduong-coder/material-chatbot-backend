/* eslint-disable @typescript-eslint/no-unsafe-argument */

import express from "express";
import questionService from "../service/question-and-answer";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("Run GET successfully!");
  res.send("Get all questions and answer!");
});

router.post("/", (req, res) => {
  try {
    const answer = questionService.postQuestion(req.body);
    res.status(201).json(answer);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
