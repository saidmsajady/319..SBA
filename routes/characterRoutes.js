const express = require('express');
const Character = require('../models/characters.js')
const router = express.Router();

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create New Character' });
})

// Character Routes
router.get('/', (req, res) => {
    Character.find().sort({ createdAt: 1})
        .then((result) => {
            res.render('index', { title: 'All Characters', characters: result })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post('/', (req, res) => {
    const character = new Character(req.body)

    character.save()
        .then((result) => {
            res.redirect('/characters');
        })
        .catch ((err) => {
            console.log(err);
        });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Character.findById(id)
        .then(result => {
            res.render('details', { character: result, title: 'Character Details'});
        })
        .catch((err) => {
            console.log(err);
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Character.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/characters' })
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;