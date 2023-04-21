const router = require('express').Router();
const User = require('../models/User');
router.post('/auth/login', async (req, res) => {
  const user_data = req.body;
  const user = await User.findOne({
    where: {
      email: user_data.email
    }
  });
  if (!user) {
    req.session.auth_errors = ['No account found with that email address. Please register.']
    return res.redirect('/register');
  }
  const valid_pass = await user.validatePass(user_data.password);
  if (!valid_pass) {
    req.session.auth_errors = ['Your password is incorrect']
    return res.redirect('/login');
  }
  req.session.user_id = user.id;
  res.redirect('/dashboard');
});
router.post('/auth/register', async (req, res) => {
  const user_data = req.body;
  req.session.auth_errors = ['Invalid registration'];
  delete req.session.auth_errors;
  try {
    const user = await User.create(user_data);
    req.session.user_id = user.id;
    delete req.session.auth_errors;
    res.redirect('/dashboard');
  } catch (err) {
    const errors = err.errors.map(errObj => errObj.message);
    req.session.auth_errors = errors;
    res.redirect('/register');
  }
});
// Logout
router.get('/auth/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
module.exports = router;