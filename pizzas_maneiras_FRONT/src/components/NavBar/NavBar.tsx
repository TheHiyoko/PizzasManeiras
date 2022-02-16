import React from "react";
import {Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <Navbar>
                    <Container>
                    {/* Logo da pizzaria */}
                    <h3 className="text-danger pl-10">Pizzas Maneiras</h3>
                    {/* Opção login*/}
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link href="">Login</Nav.Link>
                        </Nav.Item>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}
  
export default NavBar;
  