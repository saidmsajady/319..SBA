const express = require('express');

// Express App
const app = express();

// Register View Engiene
app.set('view engine', 'ejs');

// Listen for Request
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    res.render('index');
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    res.render('about');
});

app.get('/charcter/create', (req, res) => {
    res.render('create');
})

// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
// Middlewear
app.use((req, res) => {
    res.status(404).render('404')
})