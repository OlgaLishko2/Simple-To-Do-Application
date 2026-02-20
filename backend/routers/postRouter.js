const express = require('express');

const db = require('../database');

const postRouter = express.Router();

postRouter.post('/', (req, res) => {
  const { text, completed = 0, dueDate = null, priority = 'normal' } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Task text required' });
  }
    //insert data to the db

   db.run('INSERT INTO tasks (text, completed, dueDate, priority) VALUES (?, ?, ?, ?)', 
    [text, completed, dueDate, priority], function(err) {
    if (err) return res.status(500).json({ error: err.message });

    //return task with id

db.all('SELECT * FROM tasks', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json(rows);
      });
    }
  );
});

module.exports = postRouter;
