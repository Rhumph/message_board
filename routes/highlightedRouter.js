const { Router } = require('express');
const messages = require('./indexRouter').messages;
const highlighted = Router();

highlighted.get('/:index', (req, res) => {
    const messageIndex = req.params.index;
    const message = messages[messageIndex];
    res.render('highlighted', { title: "Highlighted Messages", message: message });
});

module.exports = highlighted;