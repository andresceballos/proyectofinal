const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const newsRoutes = require('../app/routes/usuario_eps');
const usersRoutes = require('../app/routes/users');

const app = express();

// settings 
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// middlewares 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'secret secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

//routes

app.use('/', usersRoutes);
app.use('/', newsRoutes);
module.exports = app;