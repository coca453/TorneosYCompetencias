const express = require('express');
const path = require('path');

const app = express();


// Serve static files
app.use(express.static(__dirname + '/dist/TorneosYCompetencias'));

// Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5001);