const express = require('express');
const router = express.Router();

const {data} = require('../data/flashCardData.json');
const {cards} = data;

router.get('/:id', function(req, res) {
    res.locals.prompt = cards[req.params.id].question;
    res.locals.hint = cards[req.params.id].hint;
    res.render('card');
});

module.exports = router;