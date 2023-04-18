const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('/auth/login');
});

router.get('/register', (req, res) => {
  res.render('auth/register');
});

module.exports = router;