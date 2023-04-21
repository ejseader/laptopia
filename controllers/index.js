const router = require('express').Router();

const userRoutes = require('./routes');
const homeRoutes = require('./public_routes');

router.use('/', [homeRoutes, userRoutes]);

module.exports = router;