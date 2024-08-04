const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs/index.html'))
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs/notes.html'))
});

module.exports = router;