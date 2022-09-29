// https://react-landing-page-template-2021.vercel.app/ 
import Plot from 'react-plotly.js';
function BarGraph(props) {
    console.log(window.sessionStorage.getItem("uID"));
    
    return ( 
    
    <Plot
        data={[
          {
            x: props.x,
            name: props.name,
            y: props.y,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'green'},
            type: 'bar'
          }
        ]}
        layout={ {width: props.width, height: props.height, title: props.title} }
      />
    
    
    
    );
    
    // console.log(window);
}

export default BarGraph;

