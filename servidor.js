const porta = 3003//Processo dentro do computador em rede

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))//Função q retorna uma função Middleware

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())//convertido para JSON RETORNA UMA RESPOSTA
})//FORMA DE REQUISIÇÃO

app.get('produtos/:id', (req, res, next) =>//tras um produto baseado no id
{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>
{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//gera um JSON
})//submete dados e salva novo produto

app.delete('/produtos/:id', (req, res, next) =>
{
    const produto = bancoDeDados.excluirProduto(req.params.id)//EXCLUI PRODUTO PELO ID
    res.send(produto)//gera um JSON
})
app.listen(porta, () => {//FUNÇÃO CALLBACK Q MOSTRA ONDE O PROCESSO ESTA EXECUTANDO
    console.log(`Servidor executando na porta ${porta}.`)
})
