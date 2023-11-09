const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1')
 
routes.get('/', lesson1Controller.joshuaRoute);
routes.get('/jt', lesson1Controller.jtRoute);
routes.get('/erin', lesson1Controller.erinRoute);

module.exports = routes;
