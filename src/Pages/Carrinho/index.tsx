import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import CarrinhoList from "../../Components/CarrinhaList"

export default function Carrinho()
{
    return (
        <div>
            <Header/>
            <h2>Carrinho</h2>
            <CarrinhoList/>
            <Footer/>
        </div>
    )
}