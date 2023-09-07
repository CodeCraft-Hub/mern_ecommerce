import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {LinkContainer} from "react-router-bootstrap"

const Header = ()=> {
  return (
    <Navbar bg='dark' expand='lg' variant='dark' collapseOnSelect>
      <Container>
        <LinkContainer to="/">
         <Navbar.Brand >online shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
            <Nav.Link>
                <i className='fas fa-shopping-cart'></i>
                 &nbsp; cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/singin">
            <Nav.Link >
                <i className='fas fa-user'></i>
                &nbsp; signin</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;