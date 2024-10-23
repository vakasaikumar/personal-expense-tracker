const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('./database/expenses.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create tables if they don't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    category TEXT NOT NULL,
    amount REAL NOT NULL,
    date TEXT NOT NULL,
    description TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL
  )`);
});

module.exports = db;
