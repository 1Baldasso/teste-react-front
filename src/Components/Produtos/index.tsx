import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Categorias from '../Categorias';
import ProdutoItem from '../ProdutoItem';
import Produto from '../../models/ProdutoModel';
export default function Produtos() {
    const produtoTeste: Produto = {
        id: "abcguid123",
        nome: "Produto Teste",
        preco: 10,
        categoria: "Teste",
        descricao: "Teste",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcSwChHJkUqoevTLo7igM9V4iPvU64XYcJQ&usqp=CAU"
    };

    const [produtos, setProdutos] = useState<Produto[]>([produtoTeste, produtoTeste, produtoTeste, produtoTeste, produtoTeste, produtoTeste]);
    return (
        <main>
            <Container>
                <h2>Nossos Produtos</h2>
                <Categorias />

                <Row md={3} className="g-4 gx-1">
                    {produtos.map((produto) => {
                        return (
                            <Col key={produto.id}>
                                <ProdutoItem produto={produto} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </main>
    )
}