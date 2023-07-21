import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../img/—Pngtree—movie board icon_4751062.png';
import { useState, useEffect } from "react";
import { config } from "../api/config.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';



const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;

function NavScrollExample() {

  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');
  const [loggedUser, setLoggedUser] = useState('');



  const searchMovie = async (query) => {

    try {
      const url = `${baseURL}search/movie?api_key=${apiKey}&query=${query}`
      const res = await fetch(url);
      const data = await res.json();
      setSearch(data.results);
     
    }
    catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    searchMovie(query);
  }, [query]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setLoggedUser(uid);
    } else {
      console.log("user is logged out")
    }
  });




  const handleLogout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error);
    });
  }

  return (

    <>
      <Navbar expand="lg" className="bg-dark-subtle sticky-top gray-400 ">
        <Container fluid>
          <Navbar.Brand href="/"><img className='Logo d-block w-50' src={img1} alt="Logo" style={{ maxHeight: '100px' }}></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              {(loggedUser &&
              <Nav.Link href="/favorites">Favorites</Nav.Link>
              )}
              {(loggedUser &&
              <Nav.Link href="/signUp" onClick={handleLogout}>Logout</Nav.Link> )}
             {!loggedUser && (
              <Nav.Link href="/signUp">SignUp</Nav.Link>
             )}
             {!loggedUser && (
              <Nav.Link href="/login">Login</Nav.Link>
             )}
            </Nav>
            <SearchBox searchValue={query} setSearchValue={setQuery} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>

        <Container className="ContainerComp">
          {query &&
            <Row className="section1">
              <MovieListHeading heading='Search result' />
            </Row>
          }
          <Row className="firstLine">
            <Col>
              <MovieList movies={search} />
            </Col>
          </Row>
        </Container>

      </BrowserRouter>
    </>

  );
}

export default NavScrollExample;
