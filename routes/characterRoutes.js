const express = require('express');
const characterController = require('../controllers/characterController');
const router = express.Router();

// Character Routes

router.get('/create', characterController.character_create_get);

router.get('/', characterController.character_index);

router.post('/', characterController.character_create_post);

router.get('/:id', characterController.character_details);

router.delete('/:id', characterController.character_delete);

module.exports = router;