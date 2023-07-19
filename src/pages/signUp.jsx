import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";


export const SignUp = ()=> {

    const navigate = useNavigate(); 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()
       
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              navigate("/login")
              
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
          });

          let obj = {
              name : name,
              email:email,
              username:username,
              password:password,
              
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
                <input className="form_input" type="text" id="Name" value={name} onChange={(e) =>setName(e.target.value)} required="required"/>
                <span>Name</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input className="form_input" type="email" id="Email" value={email} onChange={(e) =>setEmail(e.target.value)} required="required"/>
                <span>Email</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input className="form_input" type="text" id="Username" value={username} onChange={(e) =>setUsername(e.target.value)} required="required"/>
                <span>Username</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input className="form_input" type="password" id="Password" value={password} onChange={(e) =>setPassword(e.target.value)} required="required"/>
                <span>Password</span>
                <i></i>
            </div>
            
            <div className="links">
                <a href="/login">Login</a>
            </div>
           
            <input onClick={onSubmit} type="submit"  value="Sign up"/>
            
            
        </form>
    </div>   
    );
}