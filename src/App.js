import React from 'react';
import {AppRouter} from './AppRouter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/LayoutComp';
import { useReducer } from "react";
import {
  initialState as favoritesInitialState,
  favoritesReducer
} from "./Favourites/reducer";
import { FavoritesContext } from "./Favourites/context";

export const App = () => {
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
  <Layout>
  <div className='App'> 
    <div className='AppRouter'>
    <AppRouter/>
    </div>
  </div>
  </Layout> 
  </FavoritesContext.Provider>
  )
}

export default App;