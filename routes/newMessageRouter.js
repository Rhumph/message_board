const { Router } = require('express');

const newMessage = Router();

newMessage.get('/',(req, res) => {
    res.render('form');
});



module.exports = newMessage;