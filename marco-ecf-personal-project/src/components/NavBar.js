
import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "../images/logo-gamesoft.png";
import navIcon1 from "../images/nav-icon1.png";
import navIcon2 from "../images/nav-icon2.png";
import navIcon3 from "../images/nav-icon3.png";
import { NavLink } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return ( 
    
    <>
    <Navbar expand="lg" className= {scrolled ? "scrolled" : ""}> 
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Gamesoft" height={150}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <Nav.Link href="#devgames" className={activeLink === 'devgames' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('devgames')}>Games Dev.</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://en.wikipedia.org/wiki/LinkedIn"><img src={navIcon1} alt="" /></a> 
                <a href="https://en.wikipedia.org/wiki/Facebook"><img src={navIcon2} alt="" /></a>
                <a href="https://en.wikipedia.org/wiki/Instagram"><img src={navIcon3} alt="" /></a>
            </div>

            <div className="nav-link">
            <NavLink style={{marginLeft:15}} to="/login">Login</NavLink>
            <NavLink style={{marginLeft:15}} to="/signup">Sign-up</NavLink>
            </div>

            <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
            </HashLink>

          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );

}