const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Character = require('./models/characters.js')

// Express App
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://saidmsajady:Y1zQShpTvxQr4fsq@mongocluster.2h7ovds.mongodb.net/dc-characters?retryWrites=true&w=majority&appName=MongoCluster';

mongoose.connect(dbURI)
    .then((result) => app.listen(3000)) // Listen for Request
    .catch((err) => console.log(err))

// Register View Engiene
app.set('view engine', 'ejs');

// Static Built-in Middlewear for Style Sheet
app.use(express.static('styles'));

// Build in Middlewear with Morgan
app.use(morgan('dev'));

// Routes -----
app.get('/', (req, res) => {
    res.redirect('/characters');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// Character Routes
app.get('/characters', (req, res) => {
    Character.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All Characters', characters: result })
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/characters/create', (req, res) => {
    res.render('create', { title: 'Create New Character' });
})

// 404 page
// Middlewear
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})