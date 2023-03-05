require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const ClientError = require('./client-error');
const app = express();
const pg = require('pg');
const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());
app.use(staticMiddleware);

app.post('/api/app/profile', (req, res, next) => {
  console.log('req body: ', req.body);
  const { userId, companyName } = req.body;
  if (!companyName || !userId) {
    return res.status(400).json({ error: 'Invalid request: entry must include the company name and user ID' });
  }
  const sql = `UPDATE "users" SET "companyName" = $1 WHERE "userId" = $2`;
  const params = [companyName, userId];
  db.query(sql, params)
    .then(result => {
      res.status(200).json({ message: 'User profile updated successfully' });
    })
    .catch(error => {
      console.error('Query failed: ', error.message);
      next(error);
    });
});
app.post('/api/app/add/expense/', (req, res, next) => {
  console.log('req body expense update: ', req.body);
  const { date, amount, description, categoryId, userId } = req.body;
  if (!date || !amount || !description || !categoryId || !userId ) {
    return res.status(400).json({ error: 'Invalid request: missing arguments from request' });
  }
  const sql = `INSERT INTO "expenses" ("date", "amount", "description", "categoryId", "userId")
VALUES ($1, $2, $3, $4, $5);`;
  const params = [date, amount, description, categoryId, userId];
  db.query(sql, params)
    .then(result => {
      res.status(200).json({ message: 'Expense updated successfully' });
    })
    .catch(error => {
      console.error('Query failed: ', error.message);
      next(error);
    });
});
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
