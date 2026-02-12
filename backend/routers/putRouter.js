const express = require('express');
const { getIndexById, updateElement } = require('../utils');
const { list } = require('./getRouter');

const putRouter = express.Router();

putRouter.put('/:id', (req, res) => {
  const index = getIndexById(req.params.id, list);
  if (index !== -1) {
    updateElement(req.params.id, req.body, list);
    res.send(list[index]);
  } else {
    res.status(404).send();
  }
});

module.exports = putRouter;
