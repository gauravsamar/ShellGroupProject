import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pic1 from  "../img/user.png";
import pic2 from "../img/carbonfootprint1.png"
export default function LoggedInNavbar(){
  return(
    <div>
      <Navbar style={{backgroundColor:'rgb(107 156 123)' }}  variant="dark">
        <Container>
          <img src={pic2} style={{width:'40px', height:'40px', marginRight:'30px'}} />

          <Navbar.Brand href="#home">Carbon Watch</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link style={{marginLeft:'200px', fontSize:'20px' }} href="./Home"><b>Home</b></Nav.Link>
            <Nav.Link style={{marginLeft:'50px',  fontSize:'20px' }} href="./About"><b>About</b></Nav.Link>
            <Nav.Link  style={{marginLeft:'50px',  fontSize:'20px' }} href="./Goals"><b>Goals</b></Nav.Link>
            <img src={pic1} alt="" style={{width:'40px', height:'40px', marginLeft:'200px'}} />
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}