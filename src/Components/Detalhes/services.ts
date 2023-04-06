import ProdutoModel from "../../models/ProdutoModel"
import config from "../../Config/config";

async function getProdutoById(id: string): Promise<ProdutoModel> {
    const response = await fetch(`${config.ENDPOINT}/produtos/${id}`, { ...config.options, method: 'GET' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const produto = {
      _id: data._id,
      nome: data.nome,
      preco: data.preco,
      quantidade: data.quantidade,
      descricao: data.descricao,
      categoria: data.categoria,
      imagem: data.imagem,
      numeroDeCliques: data.numeroDeCliques,
    };
    return produto;
  }
export { getProdutoById }