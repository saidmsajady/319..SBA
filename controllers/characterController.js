const Character = require('../models/characters.js')

const character_index = (req, res) => {
    Character.find().sort({ createdAt: 1})
    .then((result) => {
        res.render('index', { title: 'All Characters', characters: result })
    })
    .catch((err) => {
        console.log(err)
    })
}

const character_details = (req, res) => {
    const id = req.params.id;
    Character.findById(id)
        .then(result => {
            res.render('details', { character: result, title: 'Character Details'});
        })
        .catch((err) => {
            console.log(err);
        });
}

const character_create_get = (req, res) => {
    res.render('create', { title: 'Create New Character' });
}

const character_create_post = (req, res) => {
    const character = new Character(req.body)

    character.save()
        .then((result) => {
            res.redirect('/characters');
        })
        .catch ((err) => {
            console.log(err);
        });
}

const character_delete = (req, res) => {
    const id = req.params.id;

    Character.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/characters' })
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    character_index,
    character_details,
    character_create_get,
    character_create_post,
    character_delete
}