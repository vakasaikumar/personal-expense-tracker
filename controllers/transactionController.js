const db = require('../database/db');

// Add a new transaction
const addTransaction = (req, res) => {
  const { type, category, amount, date, description } = req.body;
  const sql = 'INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)';
  db.run(sql, [type, category, amount, date, description], function(err) {
    if (err) return res.status(500).send(err.message);
    res.status(201).send({ id: this.lastID });
  });
};

// Retrieve all transactions
const getTransactions = (req, res) => {
  const sql = 'SELECT * FROM transactions';
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.send(rows);
  });
};

// Retrieve a transaction by ID
const getTransactionById = (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM transactions WHERE id = ?';
  db.get(sql, [id], (err, row) => {
    if (err) return res.status(500).send(err.message);
    if (!row) return res.status(404).send('Transaction not found');
    res.send(row);
  });
};

// Update a transaction by ID
const updateTransaction = (req, res) => {
  const id = req.params.id;
  const { type, category, amount, date, description } = req.body;
  const sql = 'UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?';
  db.run(sql, [type, category, amount, date, description, id], function(err) {
    if (err) return res.status(500).send(err.message);
    res.send({ changes: this.changes });
  });
};

// Delete a transaction by ID
const deleteTransaction = (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM transactions WHERE id = ?';
  db.run(sql, [id], function(err) {
    if (err) return res.status(500).send(err.message);
    res.send({ changes: this.changes });
  });
};

// Get summary of transactions
const getSummary = (req, res) => {
  const sql = `SELECT 
    SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS total_income,
    SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS total_expense,
    (SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) - SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END)) AS balance
    FROM transactions`;
  db.get(sql, [], (err, row) => {
    if (err) return res.status(500).send(err.message);
    res.send(row);
  });
};

module.exports = {
  addTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getSummary,
};
