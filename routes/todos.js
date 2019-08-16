const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const verify = require("./verifyToken");

//@route GET User's Todos

router.get("/", verify, async (req, res) => {
  try {
    const todos = await Todo.find({ author: req.user }).sort({ date: +1 });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route DELETE single todo

router.delete("/:id", verify, (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.deleteOne().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

//@route POST new todos
router.post("/", verify, async (req, res) => {
  const { title, date } = req.body;

  try {
    const newTodo = new Todo({
      title,
      date,
      author: req.user
    });

    const todo = await newTodo.save();

    res.json(todo);
    console.log("new Todo added");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
