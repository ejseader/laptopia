const router = require('express').Router();
const Laptop = require('../models/index')

router.get('/', (req, res) => {
  // get all the laptop data
  const allLaptop = Laptop.findAll()
  res.render('index', {data: allLaptop});
});

router.get('/login', (req, res) => {
  res.render('/auth/login');
});

router.get('/register', (req, res) => {
  res.render('auth/register');
});

module.exports = router;