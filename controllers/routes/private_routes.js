const router = require('express').Router();
const path = require('path');
const { User, Laptop } = require('../../models');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './public/images',
  filename: function(req, file, cb) {
    const filePath = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    req.user.createLaptop({
      heading: req.body.heading,
      price: req.body.price,
      brand: req.body.brand,
      model: req.body.model,
      oper_sys: req.body.oper_sys,
      condition: req.body.condition,
      description: req.body.description,
      filepath: req.body.filepath,
    })
    cb(null, filePath);
  }
});

const upload = multer({
  storage: storage
}).single('image');


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

  res.render('private/dashboard');
});

router.get('/newlisting', isAuthenticated, async (req, res) => {
  res.render('private/newlisting');
});

router.post('/newlisting', isAuthenticated, async (req, res) => {
  const user = await User.findByPk(req.session.user_id);

  req.user = user;

  upload(req, res, (err) => {
    if (err) return console.log(err);
  })

  res.render('private/dashboard', {
    name: user.name,
    email: user.email
  })
});

router.get('/userlistings', isAuthenticated, async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.session.user_id
    },
    include: Laptop,
  });

  res.render('private/userlistings');
});

module.exports = router;