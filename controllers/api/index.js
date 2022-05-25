const router = require('express').Router();
const userRoutes = require('./userRoute.js');



router.use('/users', userRoutes);

module.exports = router;