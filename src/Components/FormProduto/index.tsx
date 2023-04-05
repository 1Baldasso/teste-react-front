import Form from 'react-bootstrap/Form'
import Produto from '../../models/ProdutoModel'
import { useLocation } from 'react-router-dom'
import './styles.css'
export default function FormProduto(props: { id?: string | undefined }) {
    const produto: Produto = {
        id: "abcguid123",
        nome: "Produto Teste",
        preco: 10,
        categoria: "Teste",
        descricao: "Teste",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcSwChHJkUqoevTLo7igM9V4iPvU64XYcJQ&usqp=CAU"
    };
    const currentLocation = useLocation().pathname;
    const action = currentLocation === '/adicionar' ? 'Criar Produto' : 'Editar';
    function handleButtonClick(){
        if(action === 'Editar'){
            handleCriar();
        }
        else{
            handleEditar();
        }
    }
    function handleCriar(){
        
    }
    function handleEditar(){

    }
    return (
        <div>
            <Form className='formEditarProduto'>
                <Form.Group controlId="formEditarNome" >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Nome" defaultValue={produto.nome} />
                </Form.Group>
                <Form.Group controlId="formEditarPreco">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control type="number" placeholder="Preço" defaultValue={produto.preco} />
                </Form.Group>
                <Form.Group controlId="formEditarCategoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text" placeholder="Categoria" defaultValue={produto.categoria} />
                </Form.Group>
                <Form.Group controlId="formEditarDescricao">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="Descrição" defaultValue={produto.descricao} />
                </Form.Group>
                <Form.Group controlId="formEditarImagem" >
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control type="text" placeholder="Imagem" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="button" value={action} onClick={handleButtonClick} />
                </Form.Group>
            </Form>
        </div>
    )
}