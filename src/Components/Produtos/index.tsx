import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Categorias from '../Categorias';
import ProdutoItem from '../ProdutoItem';
import Ordenacao from '../Ordenacao';

import Produto from '../../models/ProdutoModel';
import { getProdutos } from './services';

export default function Produtos() {
  const originalProdutos = async () => await getProdutos();

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categoria, setCategoria] = useState<string>("Todos");
  const [width, setWidth] = useState<number>(window.innerWidth);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nome = searchParams.get('nome');

  useEffect(() => {
    if (nome) {
      originalProdutos().then((produtos) => {
        const produtosFiltrados = produtos.filter((produto) => {
          return produto.nome.toLowerCase().includes(nome.toLowerCase());
        });
        setProdutos(produtosFiltrados);
      });
    }

    async function fetchProdutos() {
      try {
        const produtos = await getProdutos();
        setProdutos(produtos);
      } catch (error) {
        // Handle error
      }
    }

    window.onresize = () => {
      setWidth(document.body.clientWidth);
    }

    document.addEventListener('onCategoriaChange', (event) => {
      const categoria = (event as CustomEvent).detail;
      setCategoria(categoria);

      if (categoria === "Todos") {
        originalProdutos().then((produtos) => {
          setProdutos(produtos);
        });
      } else {
        originalProdutos().then(
          (produtos) => produtos.filter((produto) => {
            return produto.categoria === categoria;
          })).then((produtos) => {
            setProdutos(produtos);
          });
      }
    });

    document.addEventListener('onOrdemChange', (event) => {
      const ordem = (event as CustomEvent).detail;
      if (ordem === "Menor Preço") {
        originalProdutos().then((produtos) => {
          produtos.sort((a, b) => {
            return a.preco - b.preco;
          });
          setProdutos(produtos);
        });
      } else if (ordem === "Maior Preço") {
        originalProdutos().then((produtos) => {
          produtos.sort((a, b) => {
            return b.preco - a.preco;
          });
          setProdutos(produtos);
        });
      } else if (ordem === "Mais Visitados") {
        originalProdutos().then((produtos) => {
          produtos.sort((a, b) => {
            return b.numeroDeCliques - a.numeroDeCliques;
          });
          setProdutos(produtos);
        });
      }
    });

    fetchProdutos();
  }, []);

  return (
    <main>
      <Container>
        <h2>Nossos Produtos</h2>
        <div className='d-flex flex-row justify-content-around'>
          <Categorias />
          <Ordenacao />
        </div>
        <Row md={width > 1024 ? 3 : width > 600 ? 2 : 1} className="g-4 gx-1">
          {produtos.map((produto) => {
            return (
              <Col key={produto.id}>
                <ProdutoItem key={produto.id + "PI"} produto={produto} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </main>
  )
}