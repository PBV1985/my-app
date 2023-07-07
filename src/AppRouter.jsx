import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import {Home} from './pages/home';
import {Login} from './pages/login';
import {Movies} from './pages/movies';
import {SignUp} from './pages/signUp';






export const AppRouter = () => {
    return (
        <Router>  
            <Routes> 
                <Route path="" element = {<Home/>} />
                <Route path="/login" element = {<Login/>} />
                <Route path="/movies" element = {<Movies/>} /> 
                <Route path="/signUp" element = {<SignUp/>} />
                
            </Routes> 
          
        </Router>
    );
}