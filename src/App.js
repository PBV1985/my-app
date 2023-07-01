
import React from 'react';
import {AppRouter} from './AppRouter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/LayoutComp';







export const App = () => {
  return (
  <Layout className='background'>
  <div className='App'> 
    <div className='AppRouter'>
    <AppRouter/>
    </div>
  </div>
  </Layout>
    
    
    
  )
}

export default App;