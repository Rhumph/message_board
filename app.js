const express = require('express');
const app = express();
const newMessageRoute = require('./routes/newMessageRouter');
const highlightedRoute = require('./routes/highlightedRouter');
const index = require('./routes/indexRouter');
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use('/', index);
app.use('/new-message', newMessageRoute);
app.use('/highlighted', highlightedRoute);
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));




app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });

