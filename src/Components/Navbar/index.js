import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  const [naveState, setNavState] = useState([
    {
      text: "Serices",
      isSelected: false,
      props: {
        href: "#deets",
   
      }
    },
    {
      text: "About Us",
      isSelected: false,
      props: {
        href: "#deets",

      }
    },
    {
      text: "Contact",
      isSelected: false,
      props: {
        href: "#memes",

        eventKey: 2
      }
    }
  ])

  const NavSelctionHandler = (idx) => {
    let navCopy = [...naveState];
    navCopy = navCopy.map((eachNav, index) => {
      eachNav.isSelected = false;
      if(index === idx){
        eachNav.isSelected = true;
      }
      return eachNav;
    })
    setNavState(navCopy)
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-3">
            <img src="https://cdn.pixabay.com/photo/2017/10/31/15/16/halloween-2905531_640.jpg" className='logo' alt="compass-logo" />
          </Nav>
          <Nav className='mx-5'>
            {naveState.map((eachNavLink, idx) => {
              return <Nav.Link key={idx}      className={`mx-5 nav-button ${eachNavLink.isSelected && "colorButton"}`} {...eachNavLink.props} onClick={() => NavSelctionHandler(idx)}>{eachNavLink.text}</Nav.Link>
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;