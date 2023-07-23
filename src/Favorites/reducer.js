// State-ul initial:
const savedFavorites = localStorage.getItem("favorites");
export const initialState = savedFavorites
  ? JSON.parse(savedFavorites)
  : { movies: [] };

  export function favoritesReducer(state, action) {
    switch (action.type) {
      case "ADD_TO_FAVORITES": {
        // Pentru adaugarea la favorite, cautam produsul in lista existenta.
        const foundMovie = state.movies.find((movie) => {
          return movie.id === action.payload.id;
        });
        // Daca avem deja produsul in lista de favorite, returnam lista, nemodificata.
        if (foundMovie) {
            console.log(foundMovie)
          return state;
          
          // Daca nu avem produsul in lista, il adaugam.
        } else {
          return {
            movies: [...state.movies, action.payload]
          };
        }
      }
      case "REMOVE_FROM_FAVORITES": {
        // Pentru a sterge un produs din lista de favorite, filtram lista, excluzand produsul cu id-ul egal cu cel primit ca payload.
        const filteredMovies = state.movies.filter((movie) => {
          return movie.id !== action.payload;
        });
        return {
          movies: filteredMovies
        };
      }
      // Nu uitam de cazul default.
      default: {
        return state;
      }
    }
  }