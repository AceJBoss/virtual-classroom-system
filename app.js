const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let api = require('./routes/api');

app.use('/api', api);

// set port
const port = process.env.PORT || 7000;

// start server
app.listen(port, function(){
    console.log(`Server started on port ${port}...`);
});