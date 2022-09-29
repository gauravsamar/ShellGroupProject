// https://react-landing-page-template-2021.vercel.app/ 
import Plot from 'react-plotly.js';
function LineGraph(props) {
    console.log(sessionStorage.getItem("email"));
    console.log(JSON.parse(sessionStorage.getItem('transport_carbon')));
    return ( 
    
    <Plot
        data={[
          {
            x: props.x,
            name: "domestic",
            y: JSON.parse(sessionStorage.getItem('domestic_carbon')),
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'green'},
          },{
            x: props.x,
            name: "transport",
            y: JSON.parse(sessionStorage.getItem('transport_carbon')),
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },{
            x: props.x,
            name: "total",
            y: JSON.parse(sessionStorage.getItem('total_carbon')),
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'yellow'},
          }
        ]}
        layout={ {width: props.width, height: props.height, title: props.title} }
      />
    
    
    
    );
    
    // console.log(window);
}

export default LineGraph;

