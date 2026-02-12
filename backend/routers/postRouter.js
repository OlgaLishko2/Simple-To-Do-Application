const express = require('express');
const { createElement } = require('../utils');
const { list } = require('./getRouter'); 

const postRouter = express.Router();

postRouter.post('/', (req, res) => {
  const newTask = createElement(req.body);
  if (newTask) {
    list.push(newTask);
    res.status(201).send(newTask);
  } else {
    res.status(400).send({ error: 'Task text required' });
  }
});

module.exports = postRouter;
