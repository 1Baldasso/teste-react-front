import Form from 'react-bootstrap/Form'
import Produto from '../../models/ProdutoModel'
import { useLocation } from 'react-router-dom'
import { adicionarProduto, editarProduto } from './service'
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
    const emptyProduto: Produto = {
        id: "",
        nome: "",
        preco: 0,
        categoria: "",
        descricao: "",
        imagem: ""
    };
    const currentLocation = useLocation().pathname;
    const fields = currentLocation === '/adicionar' ? emptyProduto : produto
    const action = currentLocation === '/adicionar' ? 'Criar Produto' : 'Editar';
    let finalFields = fields;

    function handleFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target;
        finalFields.nome = id === 'formEditarNome' ? value : finalFields.nome;
        finalFields.preco = id === 'formEditarPreco' ? parseFloat(value) : finalFields.preco;
        finalFields.categoria = id === 'formEditarCategoria' ? value : finalFields.categoria;
        finalFields.descricao = id === 'formEditarDescricao' ? value : finalFields.descricao;
        finalFields.imagem = id === 'formEditarImagem' ? value : finalFields.imagem;
    }

    function handleButtonClick(){

        if(action === 'Editar'){
            handleCriar();
        }
        else{
            handleEditar();
        }
    }
    function handleCriar(){
        adicionarProduto(fields)
    }
    function handleEditar(){
        editarProduto(props.id?? "",fields);
    }
    return (
        <div>
            <Form className='formEditarProduto'>
                <Form.Group controlId="formEditarNome" >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Nome" 
                    defaultValue={fields.nome}
                    onChange={handleFieldChange}/>
                </Form.Group>
                <Form.Group controlId="formEditarPreco">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control 
                    type="number" placeholder="Preço" 
                    defaultValue={fields.preco} 
                    step={0.01} 
                    onChange={handleFieldChange}/>
                </Form.Group>
                <Form.Group controlId="formEditarCategoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control 
                    type="dropdown" 
                    placeholder="Categoria" 
                    defaultValue={fields.categoria} 
                    onChange={handleFieldChange}/>
                </Form.Group>
                <Form.Group controlId="formEditarDescricao">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Descrição" 
                    defaultValue={fields.descricao} 
                    onChange={handleFieldChange}/>
                </Form.Group>
                <Form.Group controlId="formEditarImagem" >
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control type="text" placeholder="Imagem" />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    type="button" 
                    value={action} 
                    onClick={handleButtonClick} />
                </Form.Group>
            </Form>
        </div>
    )
}