import React from 'react'
import "./LoginPage.css"

export default function LoginFooter() {
  return (
    <div className='footerLogin'>
        <p>&copy; {new Date().getFullYear()} Linguo Application.  All rights reserved.</p>
    </div>
  )
}
