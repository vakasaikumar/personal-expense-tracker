const db = require('../database/db');

// Add a new category
const addCategory = (req, res) => {
  const { name, type } = req.body;
  const sql = 'INSERT INTO categories (name, type) VALUES (?, ?)';
  db.run(sql, [name, type], function(err) {
    if (err) return res.status(500).send(err.message);
    res.status(201).send({ id: this.lastID });
  });
};

// Retrieve all categories
const getCategories = (req, res) => {
  const sql = 'SELECT * FROM categories';
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.send(rows);
  });
};

module.exports = {
  addCategory,
  getCategories,
};
