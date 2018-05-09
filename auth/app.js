var express                 = require('express'),
    mongoose                = require('mongoose'),
    passport                = require('passport'),
    bodyparser              = require('body-parser'),
    User                    = require('./models/user'),
    LocalStrategy           = require('passport-local'),
    passportLocalMongoose   = require('passport-local-mongoose')

mongoose.connect('mongodb://localhost/auth_app');
var app = express();
app.use(require('express-session')({
    secret: 'Jesus Loves You',
    resave: false,
    saveUninitialized: false
}));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.get('/', function(req, res){
    res.render('home');
});

app.get('/secret', function(req, res){
    res.render('secret');
});

app.get('/register', function(req, res){
    res.render('register');
});

app.post('/register', function(req, res){
    User.register(new User({username: req.body.username}), req.body.passport, function(err, user)){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function(){
            res.redirect('/secret');
        });
    }
});

//start the server and listen
app.listen('3001','10.0.0.7', function(){
    console.log('Server has started');
} );