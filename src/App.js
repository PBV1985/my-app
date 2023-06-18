
import React from 'react';
import {AppRouter} from './AppRouter';
import './App.css';
import './css/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';





export const App = () => {
  return (<div className='App'>
    <div className='navBar'>
    <NavbarComp/>  
    </div>
    <div className='AppRouter'>
    <AppRouter/>
    </div>
  
  </div>
    
    
    
  )
}

export default App;