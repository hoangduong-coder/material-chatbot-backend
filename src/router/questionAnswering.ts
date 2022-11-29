import express from "express";

// import questionService from "../service/questionHandler";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("Run GET successfully!");
  res.send("Get all questions and answer!");
});

router.post("/", (_req, res) => {
  res.send("Post new questions and return answer");
});

export default router;
