import config from "../../Config/config";
import ProdutoModel from "../../models/ProdutoModel";
function adicionarAoCarrinho(produtoId : string, quantidade : number) {
    if(!produtoId || !quantidade) throw new Error("Produto ou quantidade não informados");
    return fetch(`${config.ENDPOINT}/carrinho`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: produtoId, 
            quantidade: quantidade
        }),
    });
}
export { adicionarAoCarrinho };