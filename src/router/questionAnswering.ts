/* eslint-disable @typescript-eslint/no-unused-vars */

import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("Run GET successfully!");
  res.send("Start chatting with me!");
});

router.post("/", (_req) => {
  console.log("Run POST successfully!");
});

export default router;
