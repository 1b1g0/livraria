const roteador = require('./roteador.js')
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(roteador);
app.listen(port);