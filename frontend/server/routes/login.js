const express = require('express');
const router = express.Router();
const userModel = require('../models/registration');

router.post('/', (req, res) => {
  const { phone, password } = req.body;

  userModel.findOne({ phone, password })
    .then(user => {
      if (user) {
        console.log('User logged in:', user);
        res.json({ message: 'success' });
      } else {
        console.log('Login failed: Invalid credentials');
        res.status(401).json({ message: 'Invalid credentials' });
      }
    })
    .catch(err => {
      console.error('Error logging in:', err);
      res.status(500).json({ message: 'error' });
    });
});

module.exports = router;
