// https://react-landing-page-template-2021.vercel.app/ 
import Plot from 'react-plotly.js';
function LineGraph() {
    console.log(window.sessionStorage.getItem("email"));
    
    return ( 
    
    <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
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

export default LineGraph;

