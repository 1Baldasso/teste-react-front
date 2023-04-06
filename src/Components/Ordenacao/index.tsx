import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
export default function Ordenacao()
{
    const [ordem, setOrdem] = useState<string>("Menor Preço");
    const handleSelect = (eventKey:any) => {
        setOrdem(eventKey);
        const evento = new CustomEvent('onOrdemChange', { detail: eventKey })
        document.dispatchEvent(evento);
    }
    return (
        <>
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant='' id="dropdown-basic">
                    {ordem}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item key="Menor Preço" eventKey="Menor Preço">Menor Preço</Dropdown.Item>
                    <Dropdown.Item key="Maior Preço" eventKey="Maior Preço">Maior Preço</Dropdown.Item>
                    <Dropdown.Item key="Mais Visitados" eventKey="Mais Visitados">Mais Visitados</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}