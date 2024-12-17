const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Contoh route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
