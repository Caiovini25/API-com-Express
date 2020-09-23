const sequence = 
{
    _id: 1,
    get id() { return this._id++}
}

const produtos = {}//OBJETO DE CADA UM DOS IDS

function salvarProduto(produto)
{
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id)
{
    return produtos[id] || {}//RETORNA O ID DE CADA PRODUTO
}

function getProdutos()
{
    return Object.values(produtos)//RETORNA O PRODUTO EM SI
}
function excluirProduto(id)
{
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}