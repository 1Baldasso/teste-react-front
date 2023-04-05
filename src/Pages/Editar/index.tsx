import Detalhes from "../../Components/Detalhes"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import Container from "react-bootstrap/Container"
import { useParams } from "react-router-dom"
import FormProduto from "../../Components/FormProduto";
export default function Editar()
{
    const { id } = useParams();
    return(
        <>
            <Header/>
            <h2>Detalhes do produto</h2>
            <Container className='d-flex flex-row justify-content-around'>
                <Detalhes id={id}/>
                <FormProduto id={id}/>
            </Container>
            <Footer/>
        </>
    )
}