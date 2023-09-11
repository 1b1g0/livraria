const acervoLivros = require('../dados/acervoLivros');

const consultaAcervo = (req, res) => {
  res.json(acervoLivros);
};
const consultaId = (req, res) => {
  const mensagemIdInexistente = {
    "mensagem": "Não existe livro para o ID informado."
  };
  const {id} = req.params;
  const livroSelec = acervoLivros.find(livro => livro.id === Number(id));
  if (livroSelec) {
    return res.json(livroSelec)
  } else {
    return res.status(404).json(mensagemIdInexistente)
  }
};

module.exports = {
    consultaAcervo,
    consultaId
};