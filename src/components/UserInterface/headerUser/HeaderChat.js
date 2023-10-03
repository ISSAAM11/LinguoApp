import React from 'react'
import "./../Chat Page/ChatPage.css"
import userIcon from "../../../Images/userImages/userimage5.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './HeaderChat.css'

export default function HeaderChat() {
  return (
    <header className='header-style sticky-header'>
      <div style={{ flex: 1 }}></div>

      <Navbar variant="white" bg="#eee"  >
      <Container fluid >
          <img src={userIcon} className='header-user-icon' />
        <Navbar.Collapse id="navbar-white-example" className='header-user-button'>
          <Nav>
            <NavDropdown
              id="nav-dropdown-white-example"
              title= "Issam Ben hassine "
              menuVariant="white" 
              align={{ lg: 'end' }}
            >
              <NavDropdown.Item href="#action/3.1">Mon profile </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Aide </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Paramétre </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Déconnexion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}
