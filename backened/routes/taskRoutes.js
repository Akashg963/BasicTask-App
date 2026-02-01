const express = require("express");
const Task = require("../models/Task");

const router = express.Router();


router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});


router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});


router.put("/:id", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, {
    title: req.body.title
  });
  res.send("Task Updated");
});


router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Task Deleted");
});

module.exports = router;
