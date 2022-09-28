import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic1 from "../img/c1.png";
import pic2 from "../img/c2.png";
import pic3 from "../img/c3.png";
import pic4 from "../img/c4.png";
import LoggedInNavbar from './LoggedInNavbar';
// import { ImageBackground , StyleSheet, Text, View } from "react-native";
function Home2() {
//   const pic5=require("../img/homebg.png");
  return (
    <div  >
      {/* <ImageBackground src={pic5} resizeMode="cover"> */}
      <LoggedInNavbar />
    <div className="content" style={{display:'flex',width:'80%',padding:'10px', margin:'50px',background:'../img/homebg.png'}}>
        <div className="1" style={{width:'50%', marginRight:'100px', marginLeft:'150px'}}>
        <Card style={{paddingTop:'30px', paddingBottom:'30px', borderColor:'rgb(107, 156, 123)',borderWidth:'2px'}}className="text-center">
      <Card.Body>
        <img style={{ width:'50px', height:'50px'}}src={pic1} alt="no" />
        <Card.Title style={{margin:'20px',color:'rgb(107, 156, 123)'}}>Transport Footprint</Card.Title>
        <Card.Text>
         Calculate your Transportation Carbon Footprint.
        </Card.Text>
        <Button style={{backgroundColor:'rgb(107, 156, 123)',borderColor:'Green'}}variant="primary">Calculate</Button>
      </Card.Body>
    </Card>
        </div>

        <div className="2"style={{width:'50%'}}>
        <Card style={{paddingTop:'30px', paddingBottom:'30px', borderColor:'rgb(107, 156, 123)',borderWidth:'2px'}} className="text-center">
     
      <Card.Body>
      <img style={{ width:'50px', height:'50px'}}src={pic4} alt="no" />
        <Card.Title style={{margin:'20px',color:'rgb(107, 156, 123)'}}>Domestic Footprint</Card.Title>
        <Card.Text>
        Calculate your Domestic Carbon Footprint below.
        </Card.Text>
        <Button style={{backgroundColor:'rgb(107, 156, 123)', borderColor:'Green'}} variant="primary">Calculate</Button>
      </Card.Body>
    
    </Card>
        </div>
       </div>
       <div className="content" style={{display:'flex',width:'80%', margin:'50px', marginTop:'0px'}}>
        <div className="1" style={{width:'50%' , marginRight:'100px', marginLeft:'150px'}}>
        <Card style={{paddingTop:'30px', paddingBottom:'30px', borderColor:'rgb(107, 156, 123)', borderWidth:'2px'}} className="text-center">
      
      <Card.Body>
      <img style={{ width:'50px', height:'50px'}}src={pic2} alt="no" />
        <Card.Title style={{margin:'20px',color:'rgb(107, 156, 123)'}}>Data Visualisation</Card.Title>
        <Card.Text>
         Visualise your Carbon Footprint in different forms.
        </Card.Text>
        <Button style={{backgroundColor:'rgb(107, 156, 123)',borderColor:'Green',borderColor:'rgb(107, 156, 123)'}} variant="primary">Visualise</Button>
      </Card.Body>
    
    </Card>
        </div>

        <div className="2"style={{width:'50%'}}>
       <Card style={{paddingTop:'30px', paddingBottom:'30px', borderColor:'rgb(107, 156, 123)',borderWidth:'2px'}} className="text-center">
      
      <Card.Body>
      <img style={{ width:'50px', height:'50px'}}src={pic3} alt="no" />
        <Card.Title style={{margin:'20px',color:'rgb(107, 156, 123)'}}>View Data</Card.Title>
        <Card.Text>
         View your Carbon Footprint Data in tabular form.
        </Card.Text>
        <Button style={{backgroundColor:'rgb(107, 156, 123)', borderColor:'Green'}} variant="primary">View Data</Button>
      </Card.Body>
      
    </Card>
        </div>
       </div>

       {/* </ImageBackground> */}
       </div>
       
    
  );
}

export default Home2;