import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'

function Header() {
  return (
    <>
    <div>
        <header>

    
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1><i class="fa-solid fa-users"></i>CMS Application</h1>
         
          </Navbar.Brand>
        </Container>
      </Navbar>
      

            
        </header>
    </div>
    
    
    </>
  )
}

export default Header