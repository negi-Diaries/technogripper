import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-3">
          <img src="https://cdn.pixabay.com/photo/2017/10/31/15/16/halloween-2905531_640.jpg" className='logo' alt="compass-logo"/>
          </Nav>
          <Nav className='mx-5'>
            <Nav.Link href="#deets" className='mx-5 nav-button'>Services</Nav.Link>
            <Nav.Link href="#deets" className='mx-5 nav-button'>About Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='mx-5 nav-button'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;