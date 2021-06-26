import React from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return(

      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">H&M</Navbar.Brand>
    <Nav className="me-auto">
     
      
      {isAuthenticated &&
      <>
       <Link to="/">Home</Link>
          <Link to="/MyDrugs">My Drugs</Link>
          <Link to="/Appointment">Appointment</Link>
          <Link to="/AboutUs">About Us</Link>


          <LogoutButton />
          </>
          }
    </Nav>
    
    </Container>
  </Navbar>
    )
  }
}

export default withAuth0(Header);
