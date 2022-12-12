/* eslint-disable @typescript-eslint/no-unsafe-argument */

import express from "express";
import questionService from "../service/main";

const router = express.Router();

router.get("/", (_req, res) => {
  const chatLog = questionService.getAll();
  res.status(200).send(chatLog);
});

router.get("/:id", (req, res) => {
  try {
    const answer = questionService.getAnswer(req.params.id);
    res.status(200).send(answer);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

router.post("/", (req, res) => {
  try {
    const question = questionService.postQuestion(req.body);
    res.status(201).send(question);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
