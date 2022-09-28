// https://react-landing-page-template-2021.vercel.app/ 
import Plot from 'react-plotly.js';
function LineGraph(props) {
    console.log(window.sessionStorage.getItem("email"));
    
    return ( 
    
    <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'green'},
          }
        ]}
        layout={ {width: props.width, height: props.height, title: props.title} }
      />
    
    
    
    );
    
    // console.log(window);
}

export default LineGraph;

