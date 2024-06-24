const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const characterRoutes = require('./routes/characterRoutes.js')

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

// Other Middlewear
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes -----
app.get('/', (req, res) => {
    res.redirect('/characters');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Character Routes
app.use('/characters', characterRoutes);

// 404 page
// Middlewear
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})