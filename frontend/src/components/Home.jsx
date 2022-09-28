import LoggedInNavbar from './LoggedInNavbar';
import { React, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import LoginNavbar from './loginnavbar';
export default function Home(){

const [elementIsVisible, setElementIsVisible] = useState(false);
const bg = {
  true: {
    left: "7rem",
  },
  false: {
    left: "19rem",
  },
};
const musicPlayer = {
  true: {
    left: "295px",
  },
  false: {
    left: "235px",
  },
};
const rect = {
  true: {
    left: "11rem",
  },
  false: {
    left: "13rem",
  },
}
const heart = {
  true: {
    left: "9rem",
  },
  false: {
    left: "12.5rem",
  },
};
const liStyle = {color:"#42855B", fontSize:'50px'};
  return(
    <div style={{backgroundColor:'#C6EBC5'}}>
<LoginNavbar />
<VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
       <div style={{paddingLeft:'80px', paddingTop:'100px'}}>

          <span   style={ {marginTop:"-150px" } }>
            <b style={liStyle}>Carbon Footprint</b>
          
          </span><br></br>
          <span style={liStyle}>Calculator</span>{" "}
          <br />
          <br />
          <p style={{marginLeft:'5px'}}>Decarburization is the process of decreasing carbon content.</p>
        </div>
       

        <div style={{paddingRight:'150px', paddingTop:'100px', paddingBottom:'45px'}}>
        
          <img
            src={require("../img/b1.png")}
            alt=""
            className="absolute top-[-10rem] h-[22rem] left-[8rem]"
            style={{width:'400px', height:'400px'}}
          />
       
        </div>
      </div>
    </VisibilitySensor>
</div>

)


}

