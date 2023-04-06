import ProdutoModel from "../../models/ProdutoModel";
import { ProdutoRequestDto } from "../../models/ProdutoModel";
import config from "../../Config/config";

function adicionarProduto(produto: ProdutoModel)
{
    const {_id, numeroDeCliques, ...rest} = produto;
    const produtoRequestDto: ProdutoRequestDto = { 
        nome: rest.nome,
        preco: rest.preco,
        descricao: rest.descricao,
        quantidade: rest.quantidade,
        categoria: rest.categoria,
        imagem: rest.imagem
    };
    return fetch(`${config.ENDPOINT}/produtos`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        },
        body: JSON.stringify(produtoRequestDto)
    })
    .then(response => response.json()
    .then(data => ({ status: response.status, body: data })))
    .then(({ status, body }) => {
        if (status === 200) {
            console.log(body);
        } else {
            throw new Error(`Erro ${status}: ${body.message}`);
        }
    })
    .catch();
}
function editarProduto(id:string, produto: ProdutoModel)
{
    return fetch(`${config.ENDPOINT}/produtos/${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        },
        body: JSON.stringify(produto)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(`Error: ${error}
            `));
}
function deletarProduto(id:string)
{
    return fetch(`${config.ENDPOINT}/produtos/${id}`, {
        method: 'DELETE',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(`Error: ${error}
    `));
}
export {adicionarProduto, editarProduto, deletarProduto};