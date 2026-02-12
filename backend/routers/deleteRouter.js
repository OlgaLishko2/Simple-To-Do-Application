const express = require('express');
const { getIndexById } = require('../utils');
const { list } = require('./getRouter');

const deleteRouter = express.Router();

deleteRouter.delete('/:id', (req, res) => {
  const index = getIndexById(req.params.id, list);
  if (index !== -1) {
    list.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = deleteRouter;
