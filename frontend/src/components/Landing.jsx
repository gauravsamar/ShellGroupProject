import Plot from 'react-plotly.js';
import {useState} from 'react';
function Landing() {
    console.log(window.sessionStorage.getItem("email"));
    const [fruit,setfruit]=useState(["Apple","Orange","Banana","srg"]);
    const [val,setval]=useState([1,2,4,5]);
    return ( 
        
    <Plot
        data={[
          {
            x: fruit,
            y: val,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={ {width: 500, height: 500, title: 'A Fancy Plot'} }
      />
    
    
    
    );
    
    // console.log(window);
}

export default Landing;
