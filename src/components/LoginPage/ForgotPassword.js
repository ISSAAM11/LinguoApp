import React,{useState} from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom';
function ForgotPassword() {
    const [email, setEmail] = useState('');

    const SendEmail = (e) => {
        e.preventDefault();
      }
    
  return (
    <div className="login-container">
      <h2 style={{marginBottom:"20px",}}>Mot de passe oublier</h2>
      <form onSubmit={SendEmail} >
        <input
          placeholder='Email'
          type="text"
          id="username"
          style={{marginBottom: "20px"}}
        />
        <button type="submit">
          <a style={{fontWeight:"600"}}>Send </a>
        </button>
        <Link to='/' className='passwordForgot'> 
            Retour 
        </Link>
      </form>
      
    </div>  
  )
}

export default ForgotPassword