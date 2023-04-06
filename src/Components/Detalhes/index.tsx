import { redirect } from 'react-router-dom'
import ProdutoModel from '../../models/ProdutoModel';
import { getProdutoById } from './services'
import { useEffect, useState } from 'react';
export default function Detalhes(props: {id: string | undefined})
{
    const [produto, setProduto] = useState<ProdutoModel>();
    if(props.id === undefined)
    {
        redirect('/');
    }
    useEffect(() => {
        getProdutoById(props.id??"")
            .then((p: ProdutoModel) => setProduto(p))
            .catch((error: Error) => console.log(error));
    }, []);
    

    return(
        <div className='d-flex flex-column align-items-center'>
            <h4>{produto?.nome}</h4>
            <img src={produto?.imagem} alt={produto?.nome} height='100%'/>
            <p>{produto?.descricao}</p>
            <h3>R$ {produto?.preco.toFixed(2)}</h3>
        </div>
    )
}