const router = require('express').Router();
const User = require('../models/User');

function isAuthenticated(req, res, next) {
  if (!req.session.user_id) {
    return res.redirect('/login');
  }

  next();
}

// router.get('/dashboard', isAuthenticated async (req, res) => {

// });