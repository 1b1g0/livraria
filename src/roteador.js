const express = require('express');
const roteador = express();
const { validarId } = require('./intermediarios.js');
const { consultaAcervo, consultaId, } = require('./controladores/consultar');

const {
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    removerLivro
} = require('./controladores/editar');

roteador.get('/livros', consultaAcervo);
roteador.get('/:id', validarId, consultaId);
roteador.post('/livros', adicionarLivro);
roteador.put('/livros/:id', validarId, substituirLivro);
roteador.delete('/livros/:id', validarId, removerLivro);
roteador.patch('/livros/:id',validarId , alterarLivro);

module.exports = roteador;