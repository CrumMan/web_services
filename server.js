const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1.js')
 
app.get('/', lesson1Controller.joshuaRoute);

app.get('/erin',  lesson1Controller.erinRoute);

const port = 3000;

app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});