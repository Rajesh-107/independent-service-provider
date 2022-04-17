import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>
        <Navbar sticky='top' bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#features">Blogs</Nav.Link>
            <Nav.Link href="#pricing">About Me</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;