
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./todo.db');


db.run(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    completed INTEGER DEFAULT 0,
    dueDate TEXT,
    priority TEXT DEFAULT 'normal'
  )
`);

module.exports = db;
