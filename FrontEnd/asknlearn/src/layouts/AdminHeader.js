import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';
const AdminHeader = () => {
  var uid = "";
  if(localStorage.getItem('user')){
    var obj = JSON.parse(localStorage.getItem('user'));
    uid=obj.userId;
  }
return (
    <div>
        <Navbar bg="secondary" color="yellow" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="/">Client Application </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        <li class="nav-item">
        <Link class="nav-link" to="/admin/profile/"> Profile </Link>
        </li>
      
        <li><Link class="nav-link" to="/users/list"> Users  </Link></li>
        
        <li><Link class="nav-link" to="/signup"> Add User </Link></li>
        <li class="nav-item">
        <Link class="nav-link" to={"/logout/"+uid}>Logout</Link>
        </li>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
)
}

export default AdminHeader;