export default class ProdutoModel{
    _id!: string;
    nome!: string;
    preco!: number;
    descricao!: string;
    quantidade!: number;
    categoria!: string;
    imagem!: string;
    numeroDeCliques!: number;
}
type ProdutoRequestDto = {
    nome: string;
    preco: number;
    descricao: string;
    quantidade: number;
    categoria: string;
    imagem: string;
}
export type { ProdutoRequestDto }