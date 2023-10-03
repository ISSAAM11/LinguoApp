import React, {useState} from 'react'
import "./LoginPage.css"
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
export default function LoginInput(props) {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div className="login-container">
      <h2 style={{marginBottom:"20px",}}>S'identifier</h2>
      <form onSubmit={props.handleLogin}>
        <input
          placeholder='Email'
          type="text"
          id="username"
          value={props.username}
          onChange={(e) =>{ props.setUsername(e.target.value); props.setError("")}}
        />
        <input
          placeholder='Password'
          type="password"
          id="password"
          value={props.password}
          onChange={(e) =>{ props.setPassword(e.target.value); props.setError("")}}
        />
        <b className='errorLogin'>{props.error}</b>
        <Link to='./forgotPassword' className='passwordForgot'> 
          Mot de passe oublié 
        </Link>
        <button type="submit" style={{marginBottom:"10px"}}>
          <a style={{fontWeight:"600"}}>Se connecter </a>
        </button>

          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Se connecter avec Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </form>
  </div>
  )
}
