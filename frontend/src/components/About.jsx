import React from 'react';
import LoggedInNavbar from './LoggedInNavbar';
import pic1 from "../img/carbon-neutral.png"
export default function About(){

return(
    <div>
<LoggedInNavbar/>
<div style={{backgroundColor:'#C6EBC5', paddingLeft:'90px', paddingRight:'90px', paddingTop:'50px', paddingBottom:'50px'}}>
<div style={{display:'flex',justifyContent:'space-between',width:'100%', padding:'30px'}}>
<img src={pic1} style={{width:'100px', height:'100px', textAlign:'center',   marginLeft: 'auto',
  marginRight: 'auto'}} /> 
</div>

<p style={{textAlign:'justify'}}>A measure of the total amount of carbon dioxide (CO2) and methane (CH4) 
    emissions of a defined population, system or activity, considering all 
    relevant sources, sinks and storage within the spatial and temporal boundary 
    of the population, system or activity of interest. Calculated as carbon dioxide 
    equivalent using the relevant 100-year global warming potential (GWP100).</p>

<p style={{textAlign:'justify'}}>The concept and name of the carbon footprint was derived from the 
ecological footprint concept, which was developed by William E. Rees and Mathis Wackernagel in 
the 1990s at the University of British Columbia. While carbon footprints are usually reported in tons 
of emissions (CO2-equivalent) per year, ecological footprints are usually reported in comparison to what
 the planet can renew. This assesses the number of "earths" that would be required if everyone on the
  planet consumed resources at the same level as the person calculating their ecological footprint. 
  The carbon footprint is one part of the ecological footprint. Carbon footprints are more focused than 
  ecological footprints since they merely measure emissions of gases that cause climate change into the
   atmosphere.</p>

   <p> 
    Energy decarbonization involves shifting the entire energy system in an attempt to stop carbon emissions from entering the atmosphere before they are ever released — and part of that process also involves using carbon capture technologies to remove CO2 from the air after it has already been released.

    </p>

    </div>
    </div>
)


}

