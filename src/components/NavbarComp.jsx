import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from '../img/—Pngtree—movie board icon_4751062.png';
import { useState, useEffect } from "react";
import { config } from "../api/config.js";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';




const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;
const imgURL = config.ImageBaseUrl;



function NavScrollExample() {

  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
  
    fetch(`${baseURL}search/multi?api_key=${apiKey}&query`)
      .then((response) => response.json())
      .then((data) => {
        setSearch(data.results);
      });
  }, []);

  const searchMovie = async(e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `${baseURL}search/movie?api_key=${apiKey}&query=${query}`
      const res = await fetch(url);
      const data = await res.json();
      setSearch(data.results);
      console.log(data.results);
    }
    catch(e) {
      console.log(e);
    }
  }

  const changeHandler = (e) =>{
    setQuery(e.target.value);
  }

  return (

    <>
    <Navbar expand="lg" className="bg-dark-subtle sticky-top gray-400 ">
      <Container fluid>
        <Navbar.Brand href="/"><img className ='Logo d-block w-50' src={img1} alt = "Logo" style={{ maxHeight: '100px' }}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/signUp">SignUp</NavDropdown.Item>
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={searchMovie}>
            <Form.Control
              type="search"
              placeholder="Search Movie"
              className="me-2"
              aria-label="Search"
              name = "query"
              value = {query} onChange={changeHandler}
            />
            <Button variant="outline-primary" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        <BrowserRouter>
        <Row xs={1} md={4} className="g-4 ">
      {search &&
        search.map((movie) => {
          return (
            <Col className="col-sm d-flex" key={movie.id}>
              <Card className="">
                <RouterLink to={`/movie/${movie.id}`}>
                  <Card.Img
                    variant="top"
                    src={`${imgURL}${movie.poster_path}`}
                    alt="movie"
                  />
                </RouterLink>
                <Card.Body>
                  <Card.Title className="col-sm d-flex shadow-lg bg-body-tertiary rounded">
                    {movie.title}
                  </Card.Title>
                  <Card.Text className="align-items-start col-9">
                    {movie.release_date}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Row>
        </BrowserRouter>
          

        </>
    

    
    
    




    
    // <Navbar expand="lg" className="bg-dark-subtle sticky-top gray-400 ">
    //   <Container fluid>
    //     <Navbar.Brand href="/"><img className ='Logo d-block w-50' src={img1} alt = "Logo" style={{ maxHeight: '100px' }}></img></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
        
    //       <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <NavDropdown title="Link" id="navbarScrollingDropdown">
    //           <NavDropdown.Item href="/signUp">SignUp</NavDropdown.Item>
    //           <NavDropdown.Item href="/login">Login</NavDropdown.Item>
    //         </NavDropdown>
    
    //       </Nav>
    //       <Form className="d-flex">
    //         <Form.Control
    //           type="search"
    //           placeholder="Search"
    //           className="me-2"
    //           aria-label="Search"
    //         />
    //         <Button variant="outline-primary">Search</Button>
    //       </Form>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
  }

  export default NavScrollExample;
