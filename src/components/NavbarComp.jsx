import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from '../img/—Pngtree—movie board icon_4751062.png'


function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-dark-subtle sticky-top gray-400 ">
      <Container fluid>
        <Navbar.Brand href="#"><img className ='Logo d-block w-50' src={img1} alt = "Logo" style={{ maxHeight: '100px' }}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">SignUp</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
            </NavDropdown>
    
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;