import express from "express";

// import materialService from "../service/material-handler"

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("GET all materials");
});

router.post("/", (_req, res) => {
  res.send("Post new material");
});

export default router;
