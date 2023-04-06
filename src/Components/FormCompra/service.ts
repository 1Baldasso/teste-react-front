import config from "../../Config/config";
import ProdutoModel from "../../models/ProdutoModel";
function adicionarAoCarrinho(produtoId : string, quantidade : number) {
    if(!produtoId || !quantidade) throw new Error("Produto ou quantidade não informados");
    const carrinho = localStorage.getItem("carrinho");
    let lista = []
    lista = JSON.parse(carrinho?? "[]") as Array<{id: string, quantidade: number}>;
    let produto = lista.find(produto => produto.id === produtoId);
    if(produto)
    {
        const index = lista.indexOf(produto); 
        produto.quantidade = parseInt(produto.quantidade.toString()) + parseInt(quantidade.toString());
        lista[index] = produto;
    } else {
        lista.push({id: produtoId, quantidade});
    }
    const carrinhoFinal = lista;
    localStorage.setItem("carrinho", JSON.stringify(carrinhoFinal));
    console.log(carrinhoFinal)
}
export { adicionarAoCarrinho };