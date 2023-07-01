import React from 'react';
import NavBar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"


function Navbars() {
  return (
    <NavBar bg="danger" variant='dark'> 
    <Container>
        <Nav>
            <Link
            to="/" 
            className="text-light text-decoration-none">

            🏠Home
            </Link>

            <Link 
            to="/contacto" 
            className="text-light text-decoration-none">
                
            📒Contacto
            </Link>

        </Nav>
    </Container>
    </NavBar>
  )
}

export default Navbars;