// Importam ce avem nevoie.
import { useContext } from "react";
import { FavoritesContext } from "../Favorites/context";
import Button from "react-bootstrap/Button";
import { removeFromFavorites } from "../Favorites/actions";
import { config } from "../api/config.js";
import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const imgURL = config.ImageBaseUrl;

export function Favorites() {
  // Extragem state-ul pentru favorite, precum si functia care modifica state-ul.
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);

  function handleRemove(movieId) {
    // Apelam actiunea de stergere de la favorite, cu payload-ul aferent.
    const actionResult = removeFromFavorites(movieId);
    // Trimitem rezultatul actiunii catre reducer.
    favoritesDispatch(actionResult);
  }

  return (
  
    
      <Container>
        <Row  xs={1} md={4} className="g-4 ">
      {/* Afisam produsele favorite pe ecran. */}
      {favoritesState.movies.length === 0 ? (
        <h1>Nu ai filme favorite.</h1>
      ) : (
        favoritesState.movies.map((movie) => {
          return (
             <Col sm={5} className="col-sm d-flex">
              <Card key={movie.id} className="col-sm d-flex">
              <img src={`${imgURL}${movie.image}`} alt="" />
              <h2 className="col-sm d-flex" >{movie.title}</h2>
              <Button 
                variant="danger"
                // Apelam functia ce va declansa actiunea de stergere a produsului, cu payload-ul aferent.
                onClick={() => handleRemove(movie.id)}
              >
                Șterge de la favorite
              </Button>
            </Card>
            </Col>       
          );
        })
      )}
      </Row>
    </Container>  
  );
}
