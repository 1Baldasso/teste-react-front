import ProdutoModel from "../../models/ProdutoModel";
import { ProdutoRequestDto } from "../../models/ProdutoModel";
import config from "../../Config/config";

function adicionarProduto(produto: ProdutoModel)
{
    const {id, numeroDeCliques, ...rest} = produto;
    const produtoRequestDto: ProdutoRequestDto = { 
        nome: rest.nome,
        preco: rest.preco,
        descricao: rest.descricao,
        quantidade: rest.quantidade,
        categoria: rest.categoria,
        imagem: rest.imagem
    };
    console.log(config.ENDPOINT)
    return fetch(`${config.ENDPOINT}/produtos`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        },
        body: new URLSearchParams(produtoRequestDto as any).toString()
    })
    .then(response => response.json()
    .then(data => ({ status: response.status, body: data })))
    .then(({ status, body }) => {
        if (status === 201) {
            console.log(body);
        } else {
            throw new Error(`Erro ${status}: ${body.message}`);
        }
    })
    .catch(error =>{ console.log(`Error: ${error}`)});
}
function editarProduto(id:string, produto: ProdutoModel)
{
    console.log(produto)
    return fetch(`${config.ENDPOINT}/produtos/${id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
        },
        body: new URLSearchParams(produto as any).toString()
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(`Error: ${error}`));
}
function deletarProduto(id:string)
{
    const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
    const carrinhoAtualizado = carrinho.filter((item: any) => item.id !== id);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
    return fetch(`${config.ENDPOINT}/produtos/${id}`, {
        method: 'DELETE',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(`Error: ${error}`));
}
export {adicionarProduto, editarProduto, deletarProduto};