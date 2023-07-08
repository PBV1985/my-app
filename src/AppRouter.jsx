import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import {Home} from './pages/home';
import {Login} from './pages/login';
import {Movie} from './pages/movie';
import {SignUp} from './pages/signUp';
import {Link} from 'react-router-dom';


export const AppRouter = () => {
   
  const value = `/movie/`
    return (
        <Router> 
            <Link to = {value}></Link>  
            <Routes> 
                <Route path="" element = {<Home/>} />
                <Route path="/login" element = {<Login/>} />
                <Route path="/movie/:id" element = {<Movie/>} /> 
                <Route path="/signUp" element = {<SignUp/>} />
                
            </Routes> 
          
        </Router>
    );
}