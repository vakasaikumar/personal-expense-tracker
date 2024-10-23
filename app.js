const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactions');
const categoryRoutes = require('./routes/categories');

// Initialize express app
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Routes
app.use('/transactions', transactionRoutes);
app.use('/categories', categoryRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
