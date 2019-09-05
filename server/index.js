const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/restaurants/:rid', express.static('public'));

app.listen(3000, function() {
    console.log('Listening on Port 3000...');
});

