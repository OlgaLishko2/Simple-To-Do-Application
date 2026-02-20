const express = require('express');
const db = require('../database');

let list = [];
// seedElements(list, 'task');

const getRouter = express.Router();

// GET all tasks
getRouter.get('/', (req, res) => {
  db.all('SELECT * FROM tasks', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
   });
});

// GET 1 task by id
getRouter.get('/:id', (req, res) => {
  const id = req.params.id;
db.get('SELECT * FROM tasks WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Task not found' });
    res.json(row);
  });
});

module.exports = { getRouter, list }; 
