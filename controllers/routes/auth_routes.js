const router = require('express').Router();
const User = require('../../models/User');

// CREATE new user
router.post('/register', async (req, res) => {
  const user = req.body;

  try {
    const userData = await User.create({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    req.session.userId = userData.id;
    console.log(req.session.userId);

    return res.redirect('/dashboard');

  } catch (err) {
    console.log(err);
    res.redirect('/register');
  }
});

// Login
router.post('/login', async (req, res) => {
  const user = req.body;
  console.log(user);

  try {
    const userData = await User.findOne({
      where: {
        email: user.email,
      },
    });
    console.log(userData);
    if (!userData) {
      return res.redirect('/register')
    }

    const validPassword = await userData.checkPassword(user.password);

    if (!validPassword) {
      return res.redirect('/login')
    }

    req.session.userId = userData.id;

    res.redirect('private/dashboard');
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
