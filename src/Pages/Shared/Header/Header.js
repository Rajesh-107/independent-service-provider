import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
       <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Home
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#services">Photo Service</Nav.Link>
      <Nav.Link href="home#shots">Popular Shots</Nav.Link>
      <Nav.Link href="home#blogs">Blogs</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="about">About Me</Nav.Link>
      <Nav.Link as={Link} to="login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    );
};

export default Header;