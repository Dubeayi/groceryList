const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes.js')
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', routes);
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

app.listen(PORT,() => {
    console.log('listening at localhost:' + PORT + '!');
})