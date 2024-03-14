const express = require('express'); 

const identificationTypeRoute = require('./routes/identificationType.routes');
const userRoute = require('./routes/user.routes');
const authRoute = require('./routes/auth.routes');
const loanRoute = require('./routes/loan.routes');
const { routeNotFound } = require('../middleware/route.middleware');

const routerApi= (app)=>{
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/identificationType', identificationTypeRoute);
  router.use('/user', userRoute);
  router.use('/auth', authRoute);
  router.use('/loan', loanRoute);

  app.use(routeNotFound);
}

module.exports = routerApi;