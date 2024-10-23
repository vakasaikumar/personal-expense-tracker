const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, getTransactionById, updateTransaction, deleteTransaction, getSummary } = require('../controllers/transactionController');

// POST /transactions (add a new transaction)
router.post('/', addTransaction);

// GET /transactions (retrieve all transactions)
router.get('/', getTransactions);

// GET /transactions/:id (retrieve a transaction by ID)
router.get('/:id', getTransactionById);

// PUT /transactions/:id (update a transaction by ID)
router.put('/:id', updateTransaction);

// DELETE /transactions/:id (delete a transaction by ID)
router.delete('/:id', deleteTransaction);

// GET /summary (get summary of transactions)
router.get('/summary', getSummary);

module.exports = router;
