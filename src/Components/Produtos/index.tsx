import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Categorias from '../Categorias';
import ProdutoItem from '../ProdutoItem';
import Produto from '../../models/ProdutoModel';
import config from '../../Config/config';
import { getProdutos } from './services';
import Ordenacao from '../Ordenacao';
export default function Produtos() {
  const originalProdutos = async () =>  await getProdutos();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categoria, setCategoria] = useState<string>("Todos");
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
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
  useEffect(() => {
    console.log(width)
  }, [width])

  return (
    <main>
      <Container>
        <h2>Nossos Produtos</h2>
        <div className='d-flex flex-row justify-content-around'>
          <Categorias/>
          <Ordenacao/>
        </div>
        <Row md={ width > 1024 ? 3 : width > 600 ? 2 : 1} className="g-4 gx-1">
          {produtos.map((produto) => {
            return (
              <Col key={produto._id}>
                <ProdutoItem key={produto._id + "PI"} produto={produto} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </main>
  )
}