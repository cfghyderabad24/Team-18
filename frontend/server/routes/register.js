const express = require('express');
const router = express.Router();
const userModel = require('../models/registration');

router.post('/', (req, res) => {
  const { reguser, regphone, regpassword } = req.body;

  userModel.create({ username: reguser, phone: regphone,  password: regpassword })
    .then(user => {
      console.log('User registered:', user);
      res.json({ message: 'success' });
    })
    .catch(err => {
      console.error('Error registering user:', err);
      res.status(500).json({ message: 'error' });
    });
});

module.exports = router;
