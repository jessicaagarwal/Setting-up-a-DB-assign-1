require('dotenv').config();
const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3010;

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected to database');
})
.catch((error) => {
    console.error('Error connecting to database:', error);
});

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
