import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function LoggedInNavbar(){
  return(
    <div>
      <Navbar style={{backgroundColor:'rgb(107 156 123)'}}  variant="dark">
        <Container>
          <Navbar.Brand href="#home">Carbon Footprint Calculator</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link style={{marginLeft:'200px', fontSize:'20px' }} href="#home"><b>Home</b></Nav.Link>
            <Nav.Link style={{marginLeft:'50px',  fontSize:'20px' }} href="#features"><b>About</b></Nav.Link>
            <Nav.Link  style={{marginLeft:'50px',  fontSize:'20px' }} href="#pricing"><b>Goals</b></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}