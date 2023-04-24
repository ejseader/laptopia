const router = require('express').Router();
const { Laptop } = require('../models/index')

// GET all posts for homepage
router.get('/', async (req, res) => {
  // get all the laptop data
  const allLaptop = await Laptop.findAll()
  res.render('index', {
    data: allLaptop,
    loggedIn: req.session.userId && true
  });
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.userId) {
    res.redirect('/dashboard');
    return;
  }
  res.render('auth/login');
});

// Register route
router.get('/register', (req, res) => {
  if (req.session.userId) {
    res.redirect('/dashboard');
    return;
  }
  res.render('auth/register');
});

module.exports = router;