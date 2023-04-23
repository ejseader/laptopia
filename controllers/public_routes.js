const router = require('express').Router();
const { User, Laptop } = require('../models/index')

function isAuthenticated(req, res, next) {
  if (!req.session.user_id) {
    return res.redirect('/login');
  }

  next();
}

// GET all posts for homepage
router.get('/', (req, res) => {
  // get all the laptop data
  const allLaptop = Laptop.findAll()
  res.render('index', {data: allLaptop});
});

// Login route
router.get('/login', (req, res) => {
  console.log(req.session.user_id);
  if (req.session.user_id) {
    res.redirect('/dashboard');
    return;
  }
  res.render('auth/login');
});

// Register route
router.get('/register', (req, res) => {
  if (req.session.user_id) {
    res.redirect('/dashboard');
    return;
  }
  res.render('auth/register');
});

// GET user's posts for dashboard
router.get('/dashboard', isAuthenticated, async (req, res) => {
  const user = await User.findOne({
      where: {
        id: req.session.user_id
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