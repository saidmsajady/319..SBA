const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Express App
const app = express();

// Connect to MongoDB
const dbURI = 'mongodb+srv://saidmsajady:Y1zQShpTvxQr4fsq@mongocluster.2h7ovds.mongodb.net/dc-charcters?retryWrites=true&w=majority&appName=MongoCluster';

mongoose.connect(dbURI)
    .then((result) => app.listen(3000)) // Listen for Request
    .catch((err) => console.log(err))

// Register View Engiene
app.set('view engine', 'ejs');

// Static Built-in Middlewear for Style Sheet
app.use(express.static('styles'));

// Build in Middlewear with Morgan
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const charcters = [
        {name: 'Batman', species: 'Human', enemy: 'The Joker'},
        {name: 'Superman', species: 'Kryptonian', enemy: 'Lex Luther'},
        {name: 'Wonder Woman', species: 'Demi-God', enemy: 'Cheetah'}
    ]
    res.render('index', { title: 'Home', charcters});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/charcter/create', (req, res) => {
    res.render('create', { title: 'Create New Charcter' });
})

// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
// Middlewear
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})