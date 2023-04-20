const router = require('express').Router();
const User = require('../models/User');
// const Laptop = require('../models/Laptop');

function isAuthenticated(req, res, next) {
  if (!req.session.user_id) {
    return res.redirect('/login');
  }

  next();
}

router.get('/dashboard', isAuthenticated, async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.session.user_id
    },
    include: Laptop
  });

  res.render('private/dashboard', {
    posts: user.posts
  })
});

router.post('/newpost', isAuthenticated, async (req, res) => {
  const user = await User.findByPk(req.session.user_id);

  res.render('private/newpost', {
    name: user.name,
    email: user.email
  })
});

module.exports = router;