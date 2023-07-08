import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { config } from "../api/config.js";
import { useParams } from "react-router-dom";
import { Image } from "react-bootstrap";
import MoviePeopleComp from "../components/MoviePeopleComp.jsx";

const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;
const imgURL = config.ImageBaseUrl;

export const Movie = () => {
  const [movie, setMovie] = useState([]);
  const param = useParams();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const movie = JSON.parse(localStorage.getItem("movie"));
    if (movie) {
      setMovie(movie);
    }
    fetch(`${baseURL}movie/${param.id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setGenres(data.genres);
      });
  }, []);

  return (
    <Container>
      <Row className="">
        <h3>{movie.title}</h3>
        <div className="genres d-flex ">
          {genres &&
            genres.map((genre) => {
              return <p>{genre.name}</p>;
            })}
        </div>
        <Col sm={6}>
          <Card className="">
            {" "}
            <Card.Img
              variant="top"
              src={`${imgURL}${movie.poster_path}`}
              alt="movie"
            />
          </Card>
        </Col>
        <Col className="d-flex justify-content-end" sm={6}>
          <div>
            {["dark"].map((variant) => (
              <Alert key={variant} variant={variant}>
                <p>{movie.overview}</p>
                <p></p>
              </Alert>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <h3 className=" p-5">Actors</h3>
        <Col>
          <MoviePeopleComp />
        </Col>
      </Row>
    </Container>
  );
};
