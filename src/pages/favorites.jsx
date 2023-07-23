// Importam ce avem nevoie.
import { useContext } from "react";
import { FavoritesContext } from "../Favorites/context";
import Button from "react-bootstrap/Button";
import { removeFromFavorites } from "../Favorites/actions";
import { config } from "../api/config.js";

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
    <div>
      {/* Afisam produsele favorite pe ecran. */}
      {favoritesState.movies.length === 0 ? (
        <h1>Nu ai filme favorite.</h1>
      ) : (
        favoritesState.movies.map((movie) => {
          return (
            <div key={movie.id} className="my-3">
              <img src={`${imgURL}${movie.image}`} alt="" />
              <h2>{movie.title}</h2>
              <Button
                variant="danger"
                // Apelam functia ce va declansa actiunea de stergere a produsului, cu payload-ul aferent.
                onClick={() => handleRemove(movie.id)}
              >
                Șterge de la favorite
              </Button>
            </div>
          );
        })
      )}
    </div>
  );
}
