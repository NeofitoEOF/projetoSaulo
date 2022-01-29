const router = require('./routes');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.listen(3333, () => { console.log(`Servidor iniciado http://localhost:3333`) });