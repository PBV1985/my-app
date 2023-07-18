import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from '../img/—Pngtree—movie board icon_4751062.png'
import { useState, useEffect } from "react";
import { config } from "../api/config.js";
import searchComp from './searchComp';




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

  const searchMovieActor = async(e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `${baseURL}search/multi?api_key=${apiKey}&query=${query}`
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
          <Form className="d-flex" onSubmit={searchMovieActor}>
            <Form.Control
              type="search"
              placeholder="Search"
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
        <>
        
        
        
        </>
          

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
