import { useParams } from 'react-router-dom';
import ProdutoItem from '../../Components/ProdutoItem';
import Produto from '../../models/ProdutoModel';
import Header from '../../Components/Header';
import Detalhes from '../../Components/Detalhes';
import FormCompra from '../../Components/FormCompra';
import Footer from '../../Components/Footer';
import Container from 'react-bootstrap/esm/Container';
export default function Comprar()
{
    const { id } = useParams();

    return(
        <>
            <Header/>
            <h2>Detalhes do produto</h2>
            <Container>
                <Detalhes id={id}/>
                <FormCompra id={id}/>
            </Container>
            <Footer/>
        </>
    )
}