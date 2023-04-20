const router = require('express').Router();

function isLoggedIn(req, res, next) {
  if(req.session.user_id) return res.redirect('/dashboard');

  next();
}

router.get('/', isLoggedIn, (req, res) => {
  res.render('index');
});

router.get('/login', isLoggedIn, (req, res) => {
  res.render('auth/login');
});

router.get('/register', isLoggedIn, (req, res) => {
  res.render('auth/register');
});

module.exports = router;