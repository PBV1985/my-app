// Actiunea ce adauga un produs la favorite.
export function addToFavorites(movie) {
    return {
      type: "ADD_TO_FAVORITES",
      payload: movie
    };
  }
  
  // Actiunea ce sterge un produs de la favorite, dupa id.
  export function removeFromFavorites(movieId) {
    return {
      type: "REMOVE_FROM_FAVORITES",
      payload: movieId
    };
  }