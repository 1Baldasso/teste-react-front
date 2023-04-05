import Form from 'react-bootstrap/Form'
import './styles.css'
export default function FormCompra(props: { id:string|undefined })
{
    function handleComprar()
    {
        
    }
    return(
        <>
            <Form >
                <Form.Group controlId="formComprarItem" className="d-flex flex-row align-items-center gap-3 ml-2 form">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control type="number" placeholder="Quantidade" />
                    <Form.Control type="button" value="Adicionar ao Carrinho" onClick={handleComprar} />
                </Form.Group>    
            </Form>
        </>
    )
}