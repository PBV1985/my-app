import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import { config } from "../api/config.js";
import { useParams } from "react-router-dom";

const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;
const imgURL = config.ImageBaseUrl;

function FetchPeople() {
  const [people, setPeople] = useState([]);
  const param = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const movie = JSON.parse(localStorage.getItem("movie"));
    if (movie) {
      setMovie(movie);
    }
    fetch(`${baseURL}movie/${param.id}/credits?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.cast);
      });
  }, []);

  return (
    <Row xs={1} md={4} className="g-4 ">
      {people &&
        people.map((person) => {
          return (
            <>
              {person.profile_path && (
                <Col className="col-sm d-flex" key={person.id}>
                  <Card className="">
                    <Card.Img
                      variant="top"
                      src={`${imgURL}${person.profile_path}`}
                      alt="movie"
                    />
                    <Card.Body>
                      <Card.Title className="col-sm d-flex shadow-lg bg-body-tertiary rounded">
                        Name: {person.name}
                      </Card.Title>
                      <Card.Text className="align-items-start col-9">
                        Character: {person.character}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </>
          );
        })}
    </Row>
  );
}

export default FetchPeople;
