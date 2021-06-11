// Load Node modules
const express = require('express');

// Initialise Express
const app = express();

// Render static files
// app.use('/api', express.static('/'))
// Port website will run on
app.listen(8080);
console.log("App listening on port 8080!");

app.use('/', express.static('public'));

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('/index');
});

