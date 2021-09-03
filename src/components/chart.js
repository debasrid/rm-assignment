import { React } from 'react';

import Plot from 'react-plotly.js';

function Chart(props) {
    let xData, yData, y2Data = [];
    let chartData = props.data;
    if (chartData.length > 0) {
        chartData = chartData.sort((a,b) => a.Date - b.Date);
        xData = chartData.map(item => item.Date);
        y2Data = chartData.map(item => item.Value2);
        yData = chartData.map(item => item.Value);    
    } 
    console.log("xData", props);

    return (
        <Plot
        data={[
          {
            x: xData,
            y: yData,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {
            x: xData ,
            y: y2Data,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'green'},
          }
        ]}
        layout={ {width: 500, height: 500} }
      />
    );
}
export default Chart;