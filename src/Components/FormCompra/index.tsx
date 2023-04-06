import Form from 'react-bootstrap/Form'
import FormControlElement, { FormControlProps } from 'react-bootstrap/esm/FormControl'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { adicionarAoCarrinho } from './service'
import './styles.css'
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
        console.log(props.id, quantidade);
        adicionarAoCarrinho(props.id?? "", quantidade)
        .then()
        .catch(() => setError(true));
    }
    return(
        <>
            <Form >
                <Form.Group controlId="formComprarItem" className="d-flex flex-row align-items-center gap-3 ml-2 form">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control name="quantidade" type="number" placeholder="Quantidade" isInvalid={hasError} onChange={handleInputChange}/>
                    <Form.Control type="button" value="Adicionar ao Carrinho" onClick={handleComprar} />
                </Form.Group>
                <Form.Control.Feedback type="invalid">Algo errado aconteceu</Form.Control.Feedback>    
            </Form>
        </>
    )
}