const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route default untuk root `/`
app.get("/", (req, res) => {
    res.send("Welcome to CRUD API with Node.js and MySQL!");
});

// Gunakan routes untuk users
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
