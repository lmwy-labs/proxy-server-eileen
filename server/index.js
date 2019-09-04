const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('api/restaurants/:rid/reservations', (req, res) => {
    
    res.send('hi')
})

app.listen(3000, function() {
    console.log('Listening on Port 3000...');
});

