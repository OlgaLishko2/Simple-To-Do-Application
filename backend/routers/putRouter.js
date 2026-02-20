const express = require('express');
const db = require('../database');


const putRouter = express.Router();

putRouter.put('/:id', (req, res) => {

  const id = req.params.id;
  const { text, completed, dueDate, priority } = req.body;


 db.run(
    `UPDATE tasks
       SET text = COALESCE(?, text),
           completed = COALESCE(?, completed),
           dueDate = COALESCE(?, dueDate),
           priority = COALESCE(?, priority)
     WHERE id = ?`,

    [text, completed, dueDate, priority, id],
    
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
     
      // return updated data

      db.all('SELECT * FROM tasks',[], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
      });
    }
  );

});

module.exports = putRouter;
