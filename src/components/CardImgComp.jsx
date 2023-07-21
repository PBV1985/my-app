import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import { config } from "../api/config.js";
import { Link as RouterLink } from "react-router-dom";
import { FavoritesContext } from "../Favorites/context";
import { addToFavorites } from "../Favorites/actions";
import { useContext } from "react";
import { Button } from "react-bootstrap";

const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;
const imgURL = config.ImageBaseUrl;

function GridExample() {
  const [movies, setMovies] = useState([]);
  const { favoritesDispatch } = useContext(FavoritesContext);
  
  useEffect(() => {
    fetch(`${baseURL}discover/movie?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  function handleAddToFavourites(movie) {
    // Apelam actiunea, cu payload-ul aferent.
    const actionResult = addToFavorites(movie);
    // Trimitem rezultatul actiunii catre reducer.
    favoritesDispatch(actionResult);
  }

  return (
    <Row xs={1} md={4} className="g-4 ">
      {movies &&
        movies.map((movie) => {
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
                <Button
                  variant="outline-success"
                  onClick={() => { 
                    handleAddToFavourites({
                      id: movie.id,
                      image: movie.poster_path,
                      title: movie.title,
                    });
                  }}>
                  Adaugă la favorite
                  </Button>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
}

export default GridExample;
