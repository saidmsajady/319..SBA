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

app.get('/characters/create', (req, res) => {
    res.render('create', { title: 'Create New Character' });
})

// Character Routes
app.get('/characters', (req, res) => {
    Character.find().sort({ createdAt: 1})
        .then((result) => {
            res.render('index', { title: 'All Characters', characters: result })
        })
        .catch((err) => {
            console.log(err)
        })
})

app.post('/characters', (req, res) => {
    const character = new Character(req.body)

    character.save()
        .then((result) => {
            res.redirect('/characters');
        })
        .catch ((err) => {
            console.log(err);
        });
});

app.get('/characters/:id', (req, res) => {
    const id = req.params.id;
    Character.findById(id)
        .then(result => {
            res.render('details', { character: result, title: 'Character Details'});
        })
        .catch((err) => {
            console.log(err);
        });
});

app.delete('/characters/:id', (req, res) => {
    const id = req.params.id;

    Character.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/characters' })
        })
        .catch((err) => {
            console.log(err);
        })
})

// 404 page
// Middlewear
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})