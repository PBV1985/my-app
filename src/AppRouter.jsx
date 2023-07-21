import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Movie } from "./pages/movie";
import { SignUp } from "./pages/signUp";
import { Actor } from "./pages/actor";
import { Favorites } from "./pages/favorites";
import { useReducer } from "react";
import {
  initialState as favoritesInitialState,
  favoritesReducer
} from "./Favorites/reducer";
import { FavoritesContext } from "./Favorites/context";




export const AppRouter = () => {

  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    favoritesInitialState
  );
  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch
  };


  return (
    
    <FavoritesContext.Provider value={favoritesContextValue}>
    <Router>
     
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/actor/:id" element={<Actor />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
    </FavoritesContext.Provider>
  );
};
