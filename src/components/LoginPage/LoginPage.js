import React,{useState} from 'react';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter'; 
import LoginInput from './LoginInput';
import {useNavigate , Link } from "react-router-dom";
import ForgotPassword from './ForgotPassword';
import { Route, Routes, } from 'react-router-dom';

import "./LoginPage.css"
const LoginPage = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    
    if(username == "" || username == null){
      setError('Ajouter votre email')
    }
    else if( password == "" || password ==null){
      setError('Ajouter votre mot de passe')
    }
    else if(username == "test" && password == "test"){
      navigate("home/chatAI/") 
    }else {
      setError('Email ou mot de passe incorrecte')
    }     
  }


  return (
    <div className='LoginPage login-background' >
      <LoginHeader />
      <main >

      <Routes>
        <React.Fragment>
        
          <Route path="/*" element={
            <LoginInput  
              username={username}
              password={password}
              handleLogin={handleLogin}
              setUsername={setUsername}
              setPassword={setPassword}
              error={error}
              setError={setError}
            />} 
          />

          <Route path="/forgotPassword" element={<ForgotPassword />} />

        </React.Fragment>
      </Routes> 
{/* 
        <ForgotPassword />
        <LoginInput  username={username}
          password={password}
          handleLogin={handleLogin}
          setUsername={setUsername}
          setPassword={setPassword}
          error={error}
          setError={setError}
        />
*/}
      </main>
      <LoginFooter />
    </div>
  );
};
export default LoginPage;