import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react';
import { useState, useEffect } from "react";
import Produto from "../../models/ProdutoModel";
import ItemCarrinho from '../ItemCarrinho';
import { getProdutoById } from '../Detalhes/services';

export default function CarrinhoList() {
    const [carrinho, setCarrinho] = useState<{id:string, quantidade:number}[]>([]);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [valorTotal, setValorTotal] = useState<number>(0);
    useEffect(() => {
        const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
        setCarrinho(carrinho);
    }, []);
    useEffect(() => {
        async function fetchProdutos() {
            try {
                const produtos = await Promise.all(carrinho.map(async (item) => {
                    const produto = await getProdutoById(item.id);
                    produto.quantidade = item.quantidade;
                    return produto;
                }));
                setProdutos(produtos);
            } catch (error) {
                // Handle error
            }
        }
        fetchProdutos();
    }, [carrinho]);
    useEffect(() => {
        let total = 0;
        produtos.map((produto) => {
            const quantidades = carrinho.find((item) => item.id === produto._id);
            return {...produto, ...quantidades}
        }).forEach((produto) => {
            total += produto.preco * produto.quantidade;
        });
        setValorTotal(total);
    }, [produtos]);
    return (
        <Container>
            <Row md={3} className="g-4 gx-1">
                {produtos.map((produto) => {
                    return (
                        <Col key={produto._id}>
                            <ItemCarrinho key={produto._id + "PI"} produto={produto} quantidade={produto.quantidade} />
                        </Col>
                    )
                })}
            </Row>
            <h3>Total</h3>
            <h4>{valorTotal}</h4>
        </Container>
    )
}