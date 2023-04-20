const router = require('express').Router();
const laptopRoutes = require('./laptop');
// const productRoutes = require('./product-routes');
// const tagRoutes = require('./tag-routes');

router.use('/laptop', laptopRoutes);
// router.use('/products', productRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;
