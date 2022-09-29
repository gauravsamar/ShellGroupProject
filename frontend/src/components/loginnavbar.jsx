import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pic2 from "../img/carbonfootprint1.png"
import Button from 'react-bootstrap/Button';

export default function LoggedInNavbar(){
  const buttonStyle =
    "border-[2px] rounded-[10px] border-[#42855B] px-[25px] py-[7px] bg-[#42855B]";
  return(
    <div>
      <Navbar style={{backgroundColor:'rgb(107 156 123)' }}  variant="dark">
        <Container>
          <img src={pic2} style={{width:'40px', height:'40px', marginRight:'30px'}} />

          <Navbar.Brand href="#home">Carbon Watch</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link style={{marginLeft:'150px', fontSize:'20px' }} href="/home"><b>Home</b></Nav.Link>
            <Nav.Link style={{marginLeft:'50px',  fontSize:'20px' }} href="./About"><b>About</b></Nav.Link>
            <Nav.Link  style={{marginLeft:'50px',  fontSize:'20px', marginRight:'180px' }} href="./Goals"><b>Goals</b></Nav.Link>
            <Button  variant="light" href="/signin">Sign In</Button>{' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button  variant="dark" href="/signup">Sign Up</Button> 


 
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}