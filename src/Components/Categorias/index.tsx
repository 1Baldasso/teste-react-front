import Dropdown from 'react-bootstrap/Dropdown'
import { useState } from 'react'
export default function Categoria() {
    const [categorias,setCategorias] = useState([]);
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant='' id="dropdown-basic">
                    Categorias
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {categorias.map((categoria)=>{
                        return(
                            <Dropdown.Item key={ categoria }> { categoria } </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}