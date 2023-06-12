import config from "../../Config/config";
import Produto from '../../models/ProdutoModel'

async function getProdutos(): Promise<Produto[]> {
  try {
    const response = await fetch(`${config.ENDPOINT}/produtos`, { ...config.options, method: 'GET' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json() as any[];
    const produtos = data.map((produto: any) => ({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      quantidade: produto.quantidade,
      descricao: produto.descricao,
      categoria: produto.categoria,
      imagem: produto.imagem,
      numeroDeCliques: produto.numeroDeCliques,
    }));
    return produtos;
  } catch (error) {
    console.error('Error fetching produtos:', error);
    throw error;
  }
}

function getProdutosByCategoria(categoria: string) {
  return fetch(`${config.ENDPOINT}/produtos?categoria=${categoria}`, config.options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(`Error: ${error}
    `));
}
export { getProdutos, getProdutosByCategoria };
