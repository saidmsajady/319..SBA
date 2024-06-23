const express = require('express');

// Express App
const app = express();

// Listen for Request
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    res.sendFile('./views/about.html', { root: __dirname});
});

// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
// Middlewear
app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname});
})