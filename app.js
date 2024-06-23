const express = require('express');

// Express App
const app = express();

// Register View Engiene
app.set('view engine', 'ejs');

// Listen for Request
app.listen(3000);

app.get('/', (req, res) => {
    const charcters = [
        {name: 'Batman', species: 'Human', enemy: 'The Joker'},
        {name: 'Superman', species: 'Kryptonian', enemy: 'Lex Luther'},
        {name: 'Wonder Woman', species: 'God', enemy: 'Cheetah'}
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