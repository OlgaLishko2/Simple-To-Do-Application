const express = require('express');
const db = require('../database');


const deleteRouter = express.Router();

deleteRouter.delete('/:id', (req, res) => {
  
  const id = req.params.id;

  db.run('DELETE FROM tasks WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });

 if (this.changes === 0) {
      // if no data
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(204).send(); // delete successfully
  });
  
});

module.exports = deleteRouter;
