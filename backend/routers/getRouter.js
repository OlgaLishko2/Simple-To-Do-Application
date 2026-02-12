const express = require('express');
const { getElementById, seedElements } = require('../utils');

let list = [];
// seedElements(list, 'task');

const getRouter = express.Router();

// GET all tasks
getRouter.get('/', (req, res) => {
  res.send(list);
});

// GET 1 task by id
getRouter.get('/:id', (req, res) => {
  const task = getElementById(req.params.id, list);
  if (task) res.send(task);
  else res.status(404).send();
});

module.exports = { getRouter, list }; 
