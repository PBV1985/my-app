import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../img/—Pngtree—movie board icon_4751062.png';
import { useState, useEffect } from "react";
import { config } from "../api/config.js";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;
const imgURL = config.ImageBaseUrl;



function Search() {

  const [search, setSearch] = useState([]);

  useEffect(() => {
  
    fetch(`${baseURL}search/movie?api_key=${apiKey}&query`)
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

 

  return (

  
        <Row xs={1} md={4} className="g-4 ">
      {search &&
        search.map((movie) => {
          return (
            // <>
            // {movie.poster_path && (
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
            //  )}
            //  </>
          );
        })}
    </Row>
      
        
  );
  }

  export default Search;