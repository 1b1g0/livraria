## 📚 Livraria
Liste e consulte seus livros enviando requisições em JSON :D.

### Instalando:
```
npm init
```
```
npm install express
```

Opcional para reiniciar o servidor automaticamente:

```
npm install -D nodemon
```

### Rotas:
- GET:
  -  /livros - listar todos os livros.
    ![Listar livros](getAll.png)
  - /:id - buscar livro por id.
- DELETE:
  - /livros/:id

    ![Deletar Erro](deletarErro.png)
- POST:
  - /livros *- adicionar livro, corpo em JSON*
  ![Adicionando livro](postLivro.png)
- PATCH:
  - /livros/:id *- substituir campos, corpo em JSON*
- PUT:
  - /livros/:id *- substituir livro, corpo em JSON*

```
{
"titulo": "Jonas e a pedra sentimental",
"autor": "Clarice Crawling",
"ano": 2015,
"numPaginas": 184
}
```
![Rotas do app](rotasImg.png)

