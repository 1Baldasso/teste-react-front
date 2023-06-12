import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Produto from '../../models/ProdutoModel'
import { redirect, useLocation } from 'react-router-dom'
import { adicionarProduto, editarProduto, deletarProduto } from './service'
import './styles.css'
import ProdutoModel from '../../models/ProdutoModel'
import { useEffect, useState } from 'react'
import { getProdutoById } from '../Detalhes/services'
export default function FormProduto(props: { id?: string | undefined }) {
    const [tempFields,setTempFields] = useState<ProdutoModel>({} as ProdutoModel);
    const emptyProduto: Produto = {
        id: "",
        nome: "",
        preco: 0,
        quantidade: 0,
        categoria: "",
        descricao: "",
        imagem: "",
        numeroDeCliques: 0
    };
    useEffect(() => {
        if (props.id) {
            getProdutoById(props.id).then((produto) => {
                setTempFields(produto);
            });
        }
    }, []);
    const currentLocation = useLocation().pathname;
    const fields = currentLocation === '/adicionar' ? emptyProduto : tempFields;
    const action = currentLocation === '/adicionar' ? 'Criar Produto' : 'Editar';
    let finalFields = fields;

    function handleFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target;
        finalFields.nome = id === 'formEditarNome' ? value : finalFields.nome;
        finalFields.preco = id === 'formEditarPreco' ? parseFloat(value) : finalFields.preco;
        finalFields.categoria = id === 'formEditarCategoria' ? value : finalFields.categoria;
        finalFields.quantidade = id === 'formEditarQuantidade' ? parseInt(value) : finalFields.quantidade;
        finalFields.descricao = id === 'formEditarDescricao' ? value : finalFields.descricao;
        finalFields.imagem = id === 'formEditarImagem' ? value : finalFields.imagem;
    }

    function handleButtonClick(){

        if(action === 'Editar'){
            handleEditar();
        }
        else{
            handleCriar();
        }
    }
    function handleCriar(){
        adicionarProduto(finalFields)
            .then((produto) =>
            {
                alert('Produto criado com sucesso!')
                window.location.href = `/`;
            })
            .catch(()=>alert('Erro ao criar produto!'));
        redirect('/');
    }
    function handleEditar(){
        editarProduto(props.id?? "",finalFields).
            then((produto) =>
            {
                alert('Produto editado com sucesso!')  
                window.location.href = `/`;
            }).catch(()=>alert('Erro ao editar produto!'));
    }
    function handleDeletar(){
        deletarProduto(props.id?? "")
            .then((produto) =>
            {
                alert('Produto deletado com sucesso!')
                window.location.href = `/`;
            })
            .catch(()=>alert('Erro ao deletar produto!'));
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
                <Form.Group controlId="formEditarQuantidade">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control 
                    type="number" placeholder="Quantidade" 
                    defaultValue={fields.quantidade} 
                    onChange={handleFieldChange}/>
                </Form.Group>
                <Form.Group controlId="formEditarImagem" >
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Imagem"
                    defaultValue={fields.imagem}
                    onChange={handleFieldChange}/>
                </Form.Group>
                <div className='d-flex flex-row gap-3'>
                    <Form.Group>
                        <Form.Control 
                        type="button" 
                        value={action} 
                        onClick={handleButtonClick} />
                    </Form.Group>
                    {action === 'Editar' && 
                        <Button 
                            onClick={handleDeletar} 
                            variant='danger'
                        >
                            Deletar
                        </Button>
                    }
                </div>
            </Form>
        </div>
    )
}