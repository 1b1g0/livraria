const express = require('express');
const acervoLivros = require('./dados/acervoLivros');

const validarId = (req, res, next) => {
    const mensagemIdInvalido = {
        "mensagem": "O valor do parâmetro ID da URL não é um número válido."
    };
    const id = Number(req.params.id);
    if (!id || (id !== parseInt(id))) { 
        res.status(400).json(mensagemIdInvalido);
    } 
    else {
        next();
    }
};

module.exports = {
    validarId,
};
