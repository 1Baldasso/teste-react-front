import { redirect } from 'react-router-dom'
import Produto from '../../models/ProdutoModel'
export default function Detalhes(props: {id: string | undefined})
{
    if(props.id === undefined)
    {
        redirect('/');
    }
    const produto: Produto = {
        id: "abcguid123",
        nome: "Produto Teste",
        preco: 10,
        categoria: "Teste",
        descricao: "Teste",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcSwChHJkUqoevTLo7igM9V4iPvU64XYcJQ&usqp=CAU"
    };
    return(
        <div className='d-flex flex-column align-items-center'>
            <h4>{produto.nome}</h4>
            <img src={produto.imagem} alt={produto.nome} height='100%'/>
            <p>{produto.descricao}</p>
            <h3>R$ {produto.preco.toFixed(2)}</h3>
        </div>
    )
}