import ProdutoModel from "../../models/ProdutoModel";
import config from "../../Config/config";

function adicionarProduto(produto: ProdutoModel)
{
    return fetch(`${config.ENDPOINT}/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(`Error: ${error}
            `));
}
function editarProduto(id:string, produto: ProdutoModel)
{
    return fetch(`${config.ENDPOINT}/produtos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto)
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(`Error: ${error}
            `));
}

export {adicionarProduto, editarProduto};