import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import { config } from "../api/config.js";
import { Link as RouterLink } from "react-router-dom";

const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;
const imgURL = config.ImageBaseUrl;

function GridExample() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}discover/movie?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

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
              </Card>
            </Col>
          );
        })}
    </Row>
  );
}

export default GridExample;
