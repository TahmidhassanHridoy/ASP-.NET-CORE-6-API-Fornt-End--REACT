import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';
const Header = () => {
return (
    <div>
        <Navbar bg="secondary" color="yellow" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="/">Client Application</Navbar.Brand>
   
  </Container>
</Navbar>
    </div>
)
}

export default Header;