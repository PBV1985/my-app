import React from 'react';
import {AppRouter} from './AppRouter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/LayoutComp';
import { useReducer } from "react";
import {
  initialState as favoritesInitialState,
  favoritesReducer
} from "./Favorites/reducer";
import { FavoritesContext } from "./Favorites/context";
import ScrollToTop from './components/scrollTo';

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
    <ScrollToTop />
    </div>
  </div>
  </Layout> 
  </FavoritesContext.Provider>
 
  );
}

export default App;