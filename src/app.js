require('dotenv').config({path: __dirname + '/.env'});

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var app = express();
var sassMiddleware = require('node-sass-middleware');


const PORT = process.env.PORT || 5000;

const session =  require('express-session') ;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.use(sassMiddleware({
	src: path.join(__dirname, 'app_client/style'),
	dest: path.join(__dirname, 'public/stylesheets'),
	debug: true,
	indentedSyntax: false,
	outputStyle: 'compressed',
	prefix: '/stylesheets'

}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));

app.use(passport.initialize());

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 



// app.use(session({ secret: 'userId', resave: false, saveUninitialized: true }));


//odprava težav s HTTP odgovori
app.use(function(req, res, next) {
  res.setHeader('X-Frame-Options', 'deny');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

app.listen(PORT, function() {
	console.log("Application is listening on localhost:"+PORT);
});

module.exports = app;