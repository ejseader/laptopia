const router = require('express').Router();

const laptopRoutes = require('./laptop');
const userRoutes = require('./auth_routes');

router.use('/laptop', laptopRoutes);
router.use('/auth', userRoutes);

module.exports = router;
