const express = require('express');
const router = express.Router();

const {data} = require('../data/flashCardData.json');
const {cards} = data;



router.get('/:id', function(req, res) {
    const {side} = req.query;
    const { id } = req.params;

if(!side) {
    return res.redirect(`/cards/${id}?side=question`)
}

    const text = cards[id][side];
    const {hint} = cards[id];
    
    const name = req.cookies.username;
    const templateData = { side, text, hint, side, id, name}
    res.render('card', templateData);
});

router.get('/', function(req, res) {

    let id = Math.floor(Math.random() * 5);

    return res.redirect(`/cards/${id}`)

});


module.exports = router;