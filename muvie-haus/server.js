const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger(isDev ? 'dev' : 'common'));
app.use(bodyParser.json());

app.use('/', require('./routes/movies'));


app.listen(PORT, () => console.log('server listening on port ', PORT)
);
