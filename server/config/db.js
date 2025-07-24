const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// This configuration is now robust for production
const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
};

const pool = new Pool(proConfig);

module.exports = {
  query: (text, params) => pool.query(text, params),
};