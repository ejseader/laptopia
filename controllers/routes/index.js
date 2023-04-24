const router = require('express').Router();

const laptopRoutes = require('./laptop');
const authRoutes = require('./auth_routes');
const privateRoutes = require('./private_routes');

router.use('/laptop', laptopRoutes);
router.use('/auth', authRoutes);
router.use('/', privateRoutes);

module.exports = router;
