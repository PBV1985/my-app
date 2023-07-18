import React, {useState, setState} from "react";
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
import { Link as RouterLink } from "react-router-dom";





export const SignUp = () => {
    const [Name, setName] = useState(null);
    const [Email, setEmail] = useState(null);
    const [Username, setUsername] = useState(null);
    const [Password, setPassword] = useState(null);
    
    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if(id === "Name"){
            setName(value);
        }
        if(id === "Email"){
            setEmail(value);
        }
        if(id === "Username"){
            setUsername(value);
        }
        if(id === "Password"){
            setPassword(value);
        }
    }

    const handleSubmit = () => {

        console.log(Name, Email,Username, Password);
        let obj = {
            Name : Name,
            Email:Email,
            Username:Username,
            Password:Password,
            
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);

    }





    return ( 
        <div className="box">
        <span className="borderLine"></span>
        <form>
            <h2>Sign up</h2>
            <div className="inputBox">
                <input className="form_input" type="text" id="Name" value={Name} onChange={(e) =>handleInputChange(e)} required="required"/>
                <span>Name</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input className="form_input" type="email" id="Email" value={Email} onChange={(e) =>handleInputChange(e)} required="required"/>
                <span>Email</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input className="form_input" type="text" id="Username" value={Username} onChange={(e) =>handleInputChange(e)} required="required"/>
                <span>Username</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input className="form_input" type="password" id="Password" value={Password} onChange={(e) =>handleInputChange(e)} required="required"/>
                <span>Password</span>
                <i></i>
            </div>
            <RouterLink to={`/login`}>
            <div className="links">
                <a href="/login">Login</a>
            </div>
            <input onClick={()=>handleSubmit()} type="submit"  value="Sign up"/>
            </RouterLink>
            
        </form>
    </div>   
    );
}