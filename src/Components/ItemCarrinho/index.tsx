import React, { useState, useEffect } from 'react';
import Produto from '../../models/ProdutoModel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getProdutoById } from '../Detalhes/services';
export default function ItemCarrinho(props: {produto: Produto, quantidade: number})
{
    const handleRemoverItemCarrinho = () => {
        const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
        const index = carrinho.findIndex((item: { id: string; }) => item.id === props.produto._id);
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        window.location.reload();
    }
    return(
        <Card className="card-parent">
            <Card.Header>
                <a href={`/editar/${props.produto._id}`} className="icone-editar">
                    <span className="material-symbols-outlined float-right">
                        edit
                    </span>
                </a>
                <div className="d-flex flex-column justify-self-center">
                    <Card.Title className="loco">{props.produto.nome}</Card.Title>
                    <Card.Subtitle>{props.produto.categoria}</Card.Subtitle>
                </div>
            </Card.Header>
            <Card.Img src={props.produto?.imagem} alt={props.produto?.nome} className="card-image" />
            <Card.Footer>
                <Card.Text className="preco">R$ {props.produto.preco.toFixed(2)}</Card.Text>
                <Card.Text className="preco">Quantidade: {props.quantidade}</Card.Text>
                <Button
                    variant="dark"
                    className="botao-comprar mb-3"
                    onClick={handleRemoverItemCarrinho}
                >
                    Remover
                </Button>
            </Card.Footer>
        </Card>
    )
}