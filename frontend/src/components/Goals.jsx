import React from 'react';
import LoggedInNavbar from './LoggedInNavbar';
import pic1 from "../img/carbonfootprint.png"
export default function Goals(){

return(
    <div>
<LoggedInNavbar/>

<div style={{backgroundColor:'#C6EBC5', paddingLeft:'90px', paddingRight:'90px', paddingTop:'50px', paddingBottom:'50px'}}>
   
<div style={{display:'flex',justifyContent:'space-between',width:'100%', padding:'30px'}}>
<img src={pic1} style={{width:'120px', height:'120px', textAlign:'center',   marginLeft: 'auto',
  marginRight: 'auto'}} /> 
</div>
<p>The world is not moving fast enough to tackle climate change.</p>
<p>Shell is aiming to become a net-zero emissions energy business by 2050 or sooner, in step with society</p>
<p>The risks of current warming scenarios threaten millions of lives, billions of homes, and trillions of dollars in global economic value. It’s simply not ethical, logical, or safe to assume we can continue burning fossil fuels without rapid decarbonization. ‍</p>
<p>This application will help people to keep a track of their carbon footprint in order for them to analyse and plan accordingly. </p>
  <p>It is very important for every individual to be a responsible individual.</p>
  <p>The first and foremost tip to decarbonize your company is to measure its carbon footprint and then define clear objectives and indicators to follow</p>

    </div>
    </div>
)


}

