const router = require('express').Router();
const User = require('../../models/User');

function isLoggedIn(req, res, next) {
  if (req.session.user_id) return res.redirect('/dashboard');

  next();
}

// CREATE new user
router.post('/register', isLoggedIn, async (req, res) => {
  const formData = req.body;

  try {
    const userData = await User.create({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    req.session.userId = userData.id;

    res.redirect('/dashboard');
  } catch (err) {
    console.log(err);
    res.redirect('/register');
  }
});

// Login
router.post('/login', isLoggedIn, async (req, res) => {
  const formData = req.body;

  try {
    const user = await User.findOne({
      where: {
        email: formData.email,
      },
    });

    if (!user) {
      return res.redirect('/register');
    }

    const validPassword = await user.checkPassword(formData.password);

    if (!validPassword) {
      return res.redirect('/login')
    }

    req.session.userId = user.id;

    res.redirect('/dashboard');
  } catch (err) {
    console.log(err);
    res.redirect('/login');
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.redirect('/');
    });
  } else {
    res.redirect('/dashboard');
  }
});

module.exports = router;
