import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { config } from "../api/config.js";
import { useParams } from "react-router-dom";
import MoviesComp from "../components/MoviesComp.jsx";

const baseURL = config.apiBaseUrl;
const apiKey = config.apiKey;
const imgURL = config.ImageBaseUrl;

export const Actor = () => {
  const [person, setPerson] = useState([]);
  const param = useParams();

  useEffect(() => {
    const person = JSON.parse(localStorage.getItem("person"));
    if (person) {
      setPerson(person);
    }
    fetch(`${baseURL}person/${param.id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data);
      });
  }, []);
  return (
    <Container>
      <Row className="">
        <h3>{person.name}</h3>
        <div className="genres d-flex "></div>
        <Col sm={5}>
          <Card className="">
            <Card.Img
              variant="top"
              src={`${imgURL}${person.profile_path}`}
              alt="actor"
            />
          </Card>
        </Col>
        <Col className="d-flex" sm={5}>
          <div>
            {["dark"].map((variant) => (
              <Alert key={variant} variant={variant}></Alert>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <h3 className=" p-5">Movies</h3>
        <Col>
          <MoviesComp />
        </Col>
      </Row>
    </Container>
  );
};
