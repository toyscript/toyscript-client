import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/header.css"

function Header() {

  return(
    <>
      <Navbar className="menuBar" expand="lg" sticky="top">
        <Nav.Link href="/">
          <img
            src="/images/home.png"
            className="home"
            alt="home"
          />
        </Nav.Link>
        <Nav.Link className="ml-auto" href="/ServiceInfo">
          <img
            src="/images/menu1.png"
            className="info"
            alt="Service information"
          />
        </Nav.Link>
      </Navbar>
    </>
  )
}


export default Header;