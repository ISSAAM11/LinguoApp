import React from 'react'
import "./LoginPage.css"
import LogoLinguo from "./../../Images/Logo List/Logo linguo.png"
export default function LoginHeader() {
  return (
    <div className='LoginHeader'>
      <img src={LogoLinguo} className='LogoLingue'/>
      <a style={{paddingRight: "80px"}}>Contacter nous </a>
    </div>
  )
}
