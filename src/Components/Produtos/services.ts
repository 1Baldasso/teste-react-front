import config from "../../Config/config";
function getAllProdutos() {

}
function getProdutosByCategoria(categoria: string) {
  return fetch(`${config.ENDPOINT}/produtos?categoria=${categoria}`, config.options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(`Error: ${error}
    `));
}
export { getAllProdutos, getProdutosByCategoria };
