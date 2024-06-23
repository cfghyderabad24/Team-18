const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/registration'); // Adjust the path as necessary

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/hi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const register=require('./routes/register');
app.use('/register',register);
// Login endpoint
const login=require('./routes/login');
app.use('/login',login);

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});