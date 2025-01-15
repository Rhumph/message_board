const { Router } = require('express');
const index = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

index.get('/', (req, res) => {
    res.render('index', { title: "Mini Messageboard", messages: messages });
});

index.post('/new', (req, res) => {
    const { user, text } = req.body;
    messages.push({ text: text, user: user, added: new Date() });
    res.redirect('/');
});


module.exports = index;
module.exports.messages = messages;