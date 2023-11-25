import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Img/BeOnAirGrey.png'

const NavBar = ({series}) => {
  console.log(series);
  return (
      <Navbar bg="black" variant="dark">
        <Container fluid>
          <Nav className="me-auto">
              <img src={logo} width={100}/>
              <Nav.Link href="/">All</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown" >
                  {series.map((serie)=>(
                      <NavDropdown.Item href={`/filtered/${serie}`}>{serie}</NavDropdown.Item>))}
              </NavDropdown>
          </Nav>   
        </Container>
      </Navbar>
  );
}

export default NavBar;