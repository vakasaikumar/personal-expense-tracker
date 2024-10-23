# Personal Expense Tracker API

This API allows users to manage their personal financial records, such as income and expenses, and get summaries.

## Features:
- Add, retrieve, update, and delete transactions (income/expense).
- View a summary of transactions.
- Categories for transactions.

## Setup Instructions:

1. Clone the repository:
git clone https://github.com/your-repo/personal-expense-tracker.git 

2. Install dependencies:
npm install

3. Start the server:

node app.js

## API Endpoints:

### Add Transaction:
- **Method**: `POST`
- **URL**: `/transactions`
- **Body**:
```json
{
 "type": "income",
 "category": "Salary",
 "amount": 5000,
 "date": "2024-10-22",
 "description": "October Salary"
}
1 Retrieve All Transactions
Method: GET
URL: /transactions
Explanation:
This endpoint retrieves a list of all transactions stored in your database. When you send a GET request to this URL, your API should return an array of transaction objects.

