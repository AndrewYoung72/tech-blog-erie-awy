const router = require('express').Router();

const userRoutes = require('./userRoute.js');



router.use('/blog', userRoutes);

module.exports = router;