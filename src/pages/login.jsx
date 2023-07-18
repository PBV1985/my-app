import '../css/login.css'
import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';
import {NavLink, useNavigate } from 'react-router-dom';


export const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState ('');
  const [Password, setPassword] = useState ('');

  const onLogin = (e) => {
    e.preventhDefault();
    signInWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) =>{
      const user = userCredential.user;
     navigate("/home")
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log (errorCode, errorMessage)
    });
  }

  return (
    <div className="Login">
      <header className="Login-header">
      <div className="box">
        <span className="borderLine"></span>
        <form>
          <br></br>
          <br></br>
            <h2>Login</h2>
            <br></br>
            <div className="inputBox">
                <input type="text"  id="email-address" name="email" onChange={(e) =>setEmail(e.target.value)} required="required"/>
                <span>Email</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password"  id="password" name="password"  onChange={(e) =>setPassword(e.target.value)} required="required"/>
                <span>Password</span>
                <i></i>
            </div>
            <br></br>
            <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
            {/* <div className="links">
                <a href="/signUp">Not a member? SignUp</a>
            </div> */}
            <input  onClick = {onLogin} type="submit" value="Login"/>
        </form>
    </div>
      </header>
    </div>
  );
}