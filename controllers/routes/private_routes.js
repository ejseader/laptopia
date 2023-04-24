const router = require('express').Router();
const { User, Laptop } = require('../../models');
const upload = require('../helpers/upload');

function isAuthenticated(req, res, next) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  next();
}

// GET user's posts for dashboard
router.get('/dashboard', isAuthenticated, async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.session.userId
    },
    include: Laptop,
    attributes: {
      exclude: ['password']
    }
  });

  res.render('private/dashboard', {
    user,
    loggedIn: true,
    isDashboard: true
  });
});

router.get('/newlisting', isAuthenticated, async (req, res) => {

  res.render('private/newlisting', {
    loggedIn: true
  });
});

router.post('/newlisting', isAuthenticated, async (req, res) => {
  const user = await User.findByPk(req.session.userId);

  req.user = user;

  upload(req, res, (err) => {
    if (err) return console.log(err);

    res.redirect('/dashboard');
  });
});

router.get('/userlistings', isAuthenticated, async (req, res) => {
  const user = await Laptop.findAll({
    where: {
      id: req.session.userId
    },
    include: Laptop,
    attributes: {
      exclude: ['password']
    }
  });

  res.render('private/userlistings', {
    Laptops: user.laptops,
    loggedIn: true
  });
});

module.exports = router;