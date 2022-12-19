/* eslint-disable @typescript-eslint/no-unsafe-argument */

import express from "express";
import materialService from "../service/main/material";

const router = express.Router();

router.get("/", (_req, res) => {
  const allMaterial = materialService.getAll();
  res.send(allMaterial).status(200);
});

router.get("/:id", (req, res) => {
  try {
    const materialData = materialService.getById(req.params.id);
    res.send(materialData).status(200);
  }
  catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

router.post("/", (_req, res) => {
  res.send("Post new material");
});

export default router;
