import Form from 'react-bootstrap/Form'
import FormControlElement, { FormControlProps } from 'react-bootstrap/esm/FormControl'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { adicionarAoCarrinho } from './service'
import './styles.css'
import { redirect } from 'react-router-dom'
export default function FormCompra(props: { id:string|undefined })
{
    
    let quantidade = 0;
    const [hasError,setError] = useState(false);
    const handleInputChange = (event: ChangeEvent<any> | undefined) =>
    {
        const input = event?.target.value;
        quantidade = input;
    }
    const handleComprar = (event: FormEvent<any> | undefined) =>
    {
        if(quantidade <= 0)
        {
            setError(true);
            return;
        }
        adicionarAoCarrinho(props.id?? "", quantidade);
        redirect('/carrinho');
    }
    return(
        <>
            <Form >
                <Form.Group controlId="formComprarItem" className="d-flex flex-row align-items-center gap-3 ml-2 form">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control name="quantidade" type="number" placeholder="Quantidade" isInvalid={hasError} onChange={handleInputChange}/>
                    <Form.Control type="button" value="Adicionar ao Carrinho" onClick={handleComprar} />
                </Form.Group>
                <Form.Control.Feedback type="invalid">A quantidade deve ser maior que 0</Form.Control.Feedback>    
            </Form>
        </>
    )
}