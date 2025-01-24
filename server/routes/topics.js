const express = require("express");
const router = express.Router();
const topics = require('../models/Topic');

router.get("/", (req, res) => {
  res.json(topics);
});

router.get("/:id", (req, res) => {
  const topic = topics.find((t) => t.id === parseInt(req.params.id));
  if (!topic) return res.status(404).send("Topic not found.");
  res.json(topic);
});

module.exports = router;
