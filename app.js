const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/cards', function(req, res) {
    res.locals.prompt ="Who is buried in Grant's tomb";
    res.locals.hint = "Think about whose tomb it is"
    res.render('card');
});

app.listen(3000, function() {
    console.log("This application is running on port 3000.")
});