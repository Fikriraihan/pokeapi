import express from "express";
import { getProbability } from "../utils/probability";
import { isPrime } from "../utils/prime";
import { getFibonacciNumber } from "../utils/fibonacci";

const router = express.Router();

router.get("/catch", (req, res) => {
  const success = getProbability(50);
  res.json({ success });
});

router.post("/release", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const success = isPrime(randomNumber);
  res.json({ success, number: randomNumber });
});

router.post("/rename", (req, res) => {
  const { currentName, renameCount } = req.body;
  const fibNumber = getFibonacciNumber(renameCount);
  const newName = `${currentName.split("-")[0]}-${fibNumber}`;
  res.json({ newName });
});

export default router;
