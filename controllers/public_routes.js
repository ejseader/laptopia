const router = require('express').Router();
const { User, Laptop } = require('../models/index')

function isAuthenticated(req, res, next) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  next();
}

// GET all posts for homepage
router.get('/', async (req, res) => {
  // get all the laptop data
  const allLaptop = await Laptop.findAll()
  res.render('index', {data: allLaptop});
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
    console.log('triggered');
    res.render('private/dashboard', {
      user,
      loggedIn: true
    });
  });

module.exports = router;