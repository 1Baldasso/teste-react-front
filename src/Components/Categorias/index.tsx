import Dropdown from 'react-bootstrap/Dropdown'
import { useEffect, useState } from 'react'
import { getProdutos } from '../Produtos/services';
export default function Categoria() {
    const [categorias,setCategorias] = useState(["Todos"]);
    const [categoria, setCategoria] = useState<string>("Todos");
    const handleSelect = (eventKey:any) => {
        setCategoria(eventKey);
        const evento = new CustomEvent('onCategoriaChange', { detail: eventKey })
        document.dispatchEvent(evento);
    }
    useEffect(() => {
        getProdutos().then((produtos) => {
            const categorias = produtos.map((produto) => {
                return produto.categoria;
            });
            const categoriasUnicas = categorias.filter((categoria, index) => {
                return categorias.indexOf(categoria) === index;
            });
            setCategorias(["Todos", ...categoriasUnicas]);
        });
    }, []);
    return (
        <>
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant='' id="dropdown-basic">
                    {categoria}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {categorias.map((categoria)=>{
                        return(
                            <Dropdown.Item key={ categoria } eventKey={ categoria }> { categoria } </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}