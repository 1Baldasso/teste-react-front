import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css'
import { NavItem } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
export default function Header() {
    const currentPath = useLocation().pathname;
    function handlePesquisar() {
        console.log('Pesquisando...');
    }
    return (
        <header>
            <Navbar expand="sm" className="header">
                <Container className="justify-content-around">
                    <Navbar.Brand><h1>Lojas <span id="header-flag">Baldasso</span></h1></Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/*TODO: Reconfigurar OffCanvas*/}
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-sm`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                            placement="start"
                        >
                            <div className="justify-content-center">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                        Menu
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="me-auto">
                                        <Nav.Link href="/"><p className="meu-link">Home</p></Nav.Link>
                                        <Nav.Link href="/adicionar"><p className="meu-link">Novo Produto</p></Nav.Link>
                                    </Nav>
                                    {currentPath === '/' ? (
                                        <Form className="d-flex">
                                            <Form.Control
                                                type="search"
                                                placeholder="Produto"
                                                className="me-2"
                                                aria-label="Search"
                                            />
                                            <Button variant="outline-secondary" onClick={handlePesquisar}>Pesquisar</Button>
                                        </Form>
                                    ) : null}
                                    <Nav>
                                        <Nav.Link href='/carrinho'>
                                            <span className="material-symbols-outlined">
                                                shopping_cart
                                            </span>
                                        </Nav.Link>
                                    </Nav>
                                </Offcanvas.Body>
                            </div>
                        </Navbar.Offcanvas>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
            <hr />
        </header>
    );
}