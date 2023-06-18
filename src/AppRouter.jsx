import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import {Login} from './pages/login';
import {Home} from './pages/home';

export const AppRouter = () => {
    return (
        <Router>  
            <Routes> 
                <Route path="" element = {<Home/>} />
                <Route path="/login" element={<Login/>} />
                    
            </Routes> 
          
        </Router>
    );
}