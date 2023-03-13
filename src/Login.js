import React, {useState} from 'react'
import "./Login.css"
import {Link, useNavigate } from "react-router-dom";
import {auth} from "./Firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = (event) => {
    event.preventDefault();
    // login logic
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Logged In, redirect to homepage
        navigate("/");
      })
      .catch(e => alert(e.message));
  }

  const register = (event) => {
    event.preventDefault();
    // Register logic
    auth.createUserWithEmailAndPassword(email,password)
      .then((auth) => {
        // created a user and logged in, redirect to homepage
        navigate("/");
      })
      .catch(e => alert(e.message));
  }


  return (
    <div className = "login">
      <Link to="/">
        <img className = "login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>
      <div className="login__container">
          <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          <button onClick={login} type="submit" className = "login__signInButton">Sign in</button>
        </form>
        <p>By signing-in you agree to Amazon's Conditions of see our Privacy Notice, our Cookies ...</p>
        <button onClick = {register} className = "login__registerButton">Create your Amazon Acount</button>
      </div>
    </div>
  )
}

export default Login