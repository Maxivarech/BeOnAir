import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '/public/BeOnAirGrey.png'

const NavBar = () => {

  const [series, setseries] = useState([]);
  const hook = () => {
    axios
      .get('http://localhost:3001/series')
      .then(response => {
        setseries(response.data)
      })
  }
  
  useEffect(hook, [])
  
  return (
      <Navbar bg="black" variant="dark">
        <Container fluid>
          <Nav className="me-auto">
              <Image src={logo} width={100} />
              <Nav.Link href="/">All</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown" >
                  {series.map((serie)=>(
                      <NavDropdown.Item key={serie.id} href={`/series/${serie.id}`}>{serie.name}</NavDropdown.Item>))}
              </NavDropdown>
          </Nav>   
        </Container>
      </Navbar>
  );
}

export default NavBar;